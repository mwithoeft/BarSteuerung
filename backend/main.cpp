#include <iostream>
#include <restbed>


#include "header/RestServer.h"


void ready_handler(restbed::Service&) {
    std::cout << "[INFO] RestServer running." << std::endl;
}

int main() {
    std::cout << "[INFO] Starting server..." << std::endl;

    RestServer restServer;

    if (!restServer.init()) {
        std::cerr << "[ERROR] RestServer could not be started" << std::endl;
        return EXIT_FAILURE;
    }

    restServer.start(ready_handler);

    return EXIT_SUCCESS;
}
