#include <cstdio>
#include <wiringPi.h>
#include <iostream>
#include <fstream>
#include <sstream>
#include "../header/PlugHandler.h"

PlugHandler::PlugHandler() {
    mySwitch = new RCSwitch();
}

PlugHandler::~PlugHandler() {
    delete mySwitch;
}

bool PlugHandler::setup() {
    if (wiringPiSetup() == -1){
        std::cerr << "[ERROR] WiringPi setup failed" << std::endl;
        return false;
    }
    mySwitch->enableTransmit(PIN);
    mySwitch->setPulseLength(PULSE_LENGTH);
    mySwitch->setProtocol(PROTOCOL);

    if (!statusFileExists()) writeStatusFile();
    readStatusFile();

    return true;
}
void PlugHandler::allOn() {
    mySwitch->send(FRONT_TV_ON_Code, BITLENGTH);
    mySwitch->send(BACK_TV_ON_Code, BITLENGTH);
    frontTVStatus = true;
    backTVStatus = true;
}
void PlugHandler::allOff() {
    mySwitch->send(FRONT_TV_OFF_Code, BITLENGTH);
    mySwitch->send(BACK_TV_OFF_Code, BITLENGTH);
    frontTVStatus = false;
    backTVStatus = false;
}
void PlugHandler::onTVFront() {
    mySwitch->send(FRONT_TV_ON_Code, BITLENGTH);
    frontTVStatus = true;
}
void PlugHandler::offTVFront() {
    mySwitch->send(FRONT_TV_OFF_Code, BITLENGTH);
    frontTVStatus = false;
}
void PlugHandler::onTVBack() {
    mySwitch->send(BACK_TV_ON_Code, BITLENGTH);
    backTVStatus = true;
}
void PlugHandler::offTVBack() {
    mySwitch->send(BACK_TV_OFF_Code, BITLENGTH);
    backTVStatus = false;
}

std::string PlugHandler::getStatus() {
    std::stringstream statusStringStream;
    statusStringStream << frontTVStatus << std::endl;
    statusStringStream << backTVStatus << std::endl;
    return statusStringStream.str();
}

bool PlugHandler::statusFileExists() {
    std::ifstream f(STATUS_FILE);
    if (f.good()) {
        f.close();
        return true;
    } else {
        f.close();
        return false;
    }
}

void PlugHandler::readStatusFile(){
    std::ifstream statusFile(STATUS_FILE);
    int i = 0;
    for(std::string line; getline( statusFile, line ); i++) {
        if (i == 0) {
            std::istringstream(line) >> frontTVStatus;
        } else if (i == 1) {
            std::istringstream(line) >> backTVStatus;
        }
    }
    statusFile.close();
}

void PlugHandler::writeStatusFile() {
    std::ofstream statusFile(STATUS_FILE);
    statusFile << frontTVStatus << std::endl;
    statusFile << backTVStatus << std::endl;
    statusFile.close();
}