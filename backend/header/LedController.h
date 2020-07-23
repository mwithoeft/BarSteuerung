#ifndef BACKEND_LEDCONTROLLER_H
#define BACKEND_LEDCONTROLLER_H

#include <mutex>

#include "../lib/PiLED/PiLED.h"


class LedController {

public:
    LedController();
    ~LedController();

    [[noreturn]] void loop();

private:
    static const int NUM_LEDS = 60;
    CRGB leds[NUM_LEDS];
    PiLED* piLED;

    std::mutex mutex;
};


#endif //BACKEND_LEDCONTROLLER_H
