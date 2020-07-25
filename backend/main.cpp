#include <iostream>
#include <restbed>

#include "header/RestServer.h"


void ready_handler(restbed::Service&) {
    std::cout << "[INFO] RestServer running." << std::endl;
}

int main() {

    std::cout << "[INFO] Starting LedController thread..." << std::endl;
    LedController ledController;
    if (!ledController.init()) {
        std::cerr << "[ERROR] LedController could not be started" << std::endl;
        return EXIT_FAILURE;
    }
    std::thread ledThread(&LedController::loop, &ledController);
    std::cout << "[INFO] LedController thread started." << std::endl << std::endl;


    RestServer restServer(&ledController);
    std::cout << "[INFO] Starting RestServer..." << std::endl;
    if (!restServer.init()) {
        std::cerr << "[ERROR] RestServer could not be started" << std::endl;
        return EXIT_FAILURE;
    }
    std::thread restThread(&RestServer::start, &restServer, ready_handler);

    ledThread.join();
    restThread.join();

    return EXIT_SUCCESS;
}
