#ifndef BACKEND_LEDCONTROLLER_H
#define BACKEND_LEDCONTROLLER_H

#include <mutex>
#include <vector>

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
        RAINBOW_FLOATING,
        SPLIT_STATIC,
        SPLIT_FLOATING
    };


    LedController() = default;
    ~LedController();

    bool init();
    [[noreturn]] void loop();

    /** Setter **/
    void setColor(unsigned char, unsigned char, unsigned char);
    void setPattern(Pattern);
    void clearUserColors();
    void addUserColor(Color);

private:
    std::mutex mutex;

    std::vector<Color> userColors;

    /** LED Settings **/
    ws281x::TSPIDriver* spi_dev_1;
    static const unsigned N_PIXELS = 300;
    ws281x::TWS2812B arr_pixels[N_PIXELS];
    void flush();
    Color color{0, 0, 0};
    std::vector<Color> colorVector;
    bool patternChanged = true;
    bool firstPatternRun = true;
    void shift();

    /** Color methods **/
    void staticColor();
    void off();
    void rainbowStatic();
    void rainbowFloating();
    void splitStatic();
    void splitFloating();

    /** Funktionspointer **/
    void (LedController::*patternMethod)();

};


#endif //BACKEND_LEDCONTROLLER_H
