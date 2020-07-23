#include <iostream>

#include "../header/LedController.h"

/* Required by FastLED */
uint16_t XY( uint8_t x, uint8_t y) {
    return 0;
}

LedController::LedController() {
    piLED = new PiLED(leds, NUM_LEDS);
}

LedController::~LedController() {
    delete piLED;
}


void LedController::loop(){
    for (;;) {
        mutex.lock(); // Beispiel für später
        delay(3000);
        std::cout << "Running" << std::endl;
        mutex.unlock(); // Beispiel für später
    }
}