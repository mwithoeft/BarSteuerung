#ifndef BACKEND_BULBCONTROLLER_H
#define BACKEND_BULBCONTROLLER_H

#include <string>
#include "pyhelper.h"

class BulbController {
public:
    BulbController();
    ~BulbController();

    bool setup(void);

    bool forwardQuery(std::string, std::string, std::string, std::string, std::string, std::string, std::string);

private:
    CPyInstance* helperInstance;
    CPyObject pName;
    CPyObject pModule;
    CPyObject pFunc;
};


#endif //BACKEND_BULBCONTROLLER_H
