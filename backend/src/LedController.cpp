#include <iostream>
#include <thread>
#include <algorithm>

#include "../header/LedController.h"
#include "../header/ColorConverter.h"

LedController::~LedController() {
    delete spi_dev_1;
}

bool LedController::init() {
    spi_dev_1 = new ws281x::TSPIDriver("/dev/spidev0.0", ws281x::HZ_SPI_NEOPIXEL);
    patternMethod = &LedController::staticColor;
    setWorkingAreaColor(255, 255, 255);
    return true;
}

void LedController::loop(){
    for (;;) {
        mutex.lock();
        if (patternChanged) {
            ((*this).*patternMethod)();
        }
        flush();
        mutex.unlock();
        std::this_thread::sleep_for(std::chrono::microseconds (speed));
    }
}

void LedController::flush(){
    spi_dev_1->SendData(arr_pixels, sizeof(arr_pixels));
}


/** Color methods **/
void LedController::staticColor() {
    for(unsigned i = 0; i < N_PIXELS; i++)
        arr_pixels[i].RGB(color.red, color.green, color.blue);
    patternChanged = false;
}
void LedController::off(){
    for(unsigned i = 0; i < N_PIXELS; i++)
        arr_pixels[i].RGB(0,0,0);
    patternChanged = false;
}
void LedController::rainbowStatic(){
    colorVector.clear();
    double angle;
    for (unsigned a = 0; a < N_PIXELS; a++) {
        //Berechnung des Winkels für die Anzahl der LEDs
        angle = (359/(double)N_PIXELS)*a;
        angle += ((359/(double)(N_PIXELS))/100);
        if(angle>359) angle-=359;
        Color color = ColorConverter::hsvToRgb((int)angle,100,100);
        arr_pixels[a].RGB(color.red, color.green, color.blue);
        colorVector.push_back(color);
    }
    patternChanged = false;
}
void LedController::rainbowFloating() {
    if (firstPatternRun) {
        rainbowStatic();
        firstPatternRun = false;
        patternChanged = true;
    }
    shift();
}
void LedController::splitStatic() {
    colorVector.clear();
    unsigned length = N_PIXELS/userColors.size();
    auto color = userColors.begin();
    for (unsigned i = 1; i <= N_PIXELS; i++) {
        arr_pixels[i-1].RGB(color->red, color->green, color->blue);
        colorVector.push_back(*color);
        if (i % length == 0){
            color = std::next(color, 1);
        }
    }
    patternChanged = false;
}
void LedController::splitFloating() {
    if (firstPatternRun) {
        splitStatic();
        firstPatternRun = false;
        patternChanged = true;
    }
    shift();
}

void LedController::pulse() {
    static bool pulseCounter = true;
    if (firstPatternRun) {
        splitStatic();
        firstPatternRun = false;
    }
    if (pulseCounter) {
        for (unsigned i = 1; i <= N_PIXELS; i++)
            arr_pixels[i-1].RGB(colorVector[i].red, colorVector[i].green, colorVector[i].blue);
    } else {
        off();
    }

    pulseCounter = !pulseCounter;
    patternChanged = true;
}

/** Setter **/
void LedController::setColor(unsigned char red, unsigned char green, unsigned char blue) {
    color.red = red;
    color.green = green;
    color.blue = blue;
}
void LedController::setPattern(Pattern p) {
    mutex.lock();
    switch (p) {
        case Pattern::OFF:
            patternMethod = &LedController::off;
            break;
        case Pattern::STATIC_COLOR:
            patternMethod = &LedController::staticColor;
            break;
        case Pattern::RAINBOW_STATIC:
            patternMethod = &LedController::rainbowStatic;
            break;
        case Pattern::RAINBOW_FLOATING:
            patternMethod = &LedController::rainbowFloating;
            break;
        case Pattern::SPLIT_STATIC:
            patternMethod = &LedController::splitStatic;
            break;
        case Pattern::SPLIT_FLOATING:
            patternMethod = &LedController::splitFloating;
            break;
        case Pattern::PULSE:
            patternMethod = &LedController::pulse;
            break;
    }
    patternChanged = true;
    firstPatternRun = true;
    mutex.unlock();
}

void LedController::clearUserColors(){
    userColors.clear();
}
void LedController::addUserColor(Color c) {
    userColors.push_back(c);
}
void LedController::setSpeed(unsigned s) {
    speed = s;
}

void LedController::shift(){
    std::rotate(colorVector.begin(), colorVector.begin() + 1, colorVector.end());
    for(int i = N_PIXELS-1; i >= 0; i--) {
        arr_pixels[i].RGB(colorVector[i].red, colorVector[i].green, colorVector[i].blue);
    }
}

void LedController::setWorkingAreaColor(unsigned char red, unsigned char green, unsigned char blue) {
    for(unsigned i = N_PIXELS; i < N_PIXELS+WORKING_AREA_LEDS; i++) arr_pixels[i].RGB(red, green, blue);
    patternChanged = true;
}