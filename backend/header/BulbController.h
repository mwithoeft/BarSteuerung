#ifndef BACKEND_BULBCONTROLLER_H
#define BACKEND_BULBCONTROLLER_H

#include <string>
#include <mutex>
#include "pyhelper.h"

class BulbController {
public:
    BulbController();
    ~BulbController();

    bool setup(void);

    [[noreturn]] void loop(void);
    void setValues(std::string, std::string, std::string, std::string, std::string, std::string, std::string);

private:
    std::mutex mutex;
    bool newBulbCall;
    void forwardQuery(std::string, std::string, std::string, std::string, std::string, std::string, std::string);

    CPyInstance* helperInstance;
    CPyObject pName;
    CPyObject pModule;
    CPyObject pFunc;

    std::string mode;
    std::string r;
    std::string g;
    std::string b;
    std::string bulbs;
    std::string kelvin;
    std::string brightness;
};


#endif //BACKEND_BULBCONTROLLER_H
