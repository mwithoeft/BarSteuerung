#include <iostream>

#include "../header/LedController.h"
#include "../header/ColorConverter.h"

LedController::~LedController() {
    delete spi_dev_1;
}

bool LedController::init() {
    spi_dev_1 = new ws281x::TSPIDriver("/dev/spidev0.0", ws281x::HZ_SPI_NEOPIXEL);
    patternMethod = &LedController::off;
    return true;
}

void LedController::loop(){
    for (;;) {
        mutex.lock();
        if (patternChanged)
            ((*this).*patternMethod)();
        flush();
        mutex.unlock();
    }
}

void LedController::flush(){
    spi_dev_1->SendData(arr_pixels, sizeof(arr_pixels));
}


/** Color methods **/
void LedController::staticColor() {
    for(unsigned i = 0; i < n_pixels; i++)
        arr_pixels[i].RGB(color.red, color.green, color.blue);
    patternChanged = false;
}
void LedController::off(){
    for(unsigned i = 0; i < n_pixels; i++)
        arr_pixels[i].RGB(0,0,0);
    patternChanged = false;
}
void LedController::rainbowStatic(){
    static unsigned char r,g,b;
    unsigned winkel;
    for (unsigned a = 0;a<n_pixels;a++) {
        //Berechnung des Winkels für die Anzahl der LEDs
        winkel = (359/n_pixels)*a;
        winkel += ((359/(n_pixels))/100);
        if(winkel>359) winkel-=359;
        Color color = colorConverter.hsvToRgb(winkel,100,100);
        arr_pixels[a].RGB(color.red, color.green, color.blue);
    }
    patternChanged = false;
}
void LedController::rainbowFloating() {

}

/** Setter **/
void LedController::setColor(unsigned char red, unsigned char green, unsigned char blue) {
    color.red = red;
    color.green = green;
    color.blue = blue;
}
void LedController::setColor2(unsigned char red, unsigned char green, unsigned char blue) {
    color2.red = red;
    color2.green = green;
    color2.blue = blue;
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
    }
    patternChanged = true;
    mutex.unlock();
}
