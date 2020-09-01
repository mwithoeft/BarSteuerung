#ifndef PI_PLUGHANDLER_H
#define PI_PLUGHANDLER_H

#include "RCSwitch.h"
#include <vector>

class PlugHandler {

public:
    PlugHandler();
    ~PlugHandler();
    bool setup();

    void allOn();
    void allOff();
    void onTVFront();
    void offTVFront();
    void onTVBack();
    void offTVBack();
    void writeStatusFile();
    std::string getStatus();


private:
    RCSwitch* mySwitch;

    const int PIN = 0;
    const int PROTOCOL = 4;
    const int PULSE_LENGTH = 520;
    const int BITLENGTH = 24;
    const std::string STATUS_FILE = "statusFile.txt";

    const long int FRONT_TV_ON_Code = 10171724;
    const long int FRONT_TV_OFF_Code = 9621548;
    const long int BACK_TV_ON_Code = 10267538;
    const long int BACK_TV_OFF_Code = 9744818;

    bool frontTVStatus = false;
    bool backTVStatus = false;

    bool statusFileExists();
    void readStatusFile();



};


#endif //PI_PLUGHANDLER_H