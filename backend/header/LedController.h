#ifndef BACKEND_LEDCONTROLLER_H
#define BACKEND_LEDCONTROLLER_H

#include <mutex>


class LedController {

public:
    LedController();
    ~LedController();

    bool init();

    [[noreturn]] void loop();

private:



};


#endif //BACKEND_LEDCONTROLLER_H
