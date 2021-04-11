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
        SPLIT_FLOATING,
        PULSE
    };


    LedController() = default;
    ~LedController();

    bool init();
    [[noreturn]] void loop();

    /** Setter **/
    void setColor(unsigned char, unsigned char, unsigned char);
    void setWorkingAreaColor(unsigned char, unsigned char, unsigned char);
    void setShelfColor(unsigned char, unsigned char, unsigned char);
    void setPattern(Pattern);
    void clearUserColors();
    void addUserColor(Color);
    void setSpeed(unsigned);

private:
    std::mutex mutex;

    std::vector<Color> userColors;

    /** LED Settings **/
    ws281x::TSPIDriver* spi_dev_1;
    static const unsigned N_PIXELS = 505;
    static const unsigned WORKING_AREA_LEDS = 151;
    static const unsigned SHELF_LEDS = 148;
    //Vorne sind 505
    //Hinten sind 151
    //Regal sind 148

    unsigned speed = 600050;
    ws281x::TWS2812B arr_pixels_front[N_PIXELS + WORKING_AREA_LEDS];
    ws281x::TWS2812B arr_pixels_all[N_PIXELS + WORKING_AREA_LEDS + SHELF_LEDS];
    void flushFront();
    void flushAll();
    Color color{255, 255, 255};
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
    void pulse();

    /** Funktionspointer **/
    void (LedController::*patternMethod)();

};


#endif //BACKEND_LEDCONTROLLER_H
