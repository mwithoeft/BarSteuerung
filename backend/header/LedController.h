#ifndef BACKEND_LEDCONTROLLER_H
#define BACKEND_LEDCONTROLLER_H

#include <mutex>

#include "../lib/ws281x/ws281x.hpp"


struct Color{
    unsigned char red, green, blue;
};

class LedController {

public:
    enum Pattern {
        OFF,
        STATIC_COLOR,
        RAINBOW_STATIC,
        RAINBOW_FLOATING
    };


    LedController() = default;
    ~LedController();

    bool init();
    [[noreturn]] void loop();

    /** Setter **/
    void setColor(unsigned char, unsigned char, unsigned char);
    void setColor2(unsigned char, unsigned char, unsigned char);
    void setPattern(Pattern);

private:
    std::mutex mutex;

    /** LED Settings **/
    ws281x::TSPIDriver* spi_dev_1;
    static const unsigned n_pixels = 300;
    ws281x::TWS2812B arr_pixels[n_pixels];
    void flush();
    Color color{0, 0, 0};
    Color color2{0, 0, 0};
    bool patternChanged = true;

    /** Color methods **/
    void staticColor();
    void off();
    void rainbowStatic();
    void rainbowFloating();

    /** Funktionspointer **/
    void (LedController::*patternMethod)();

};


#endif //BACKEND_LEDCONTROLLER_H
