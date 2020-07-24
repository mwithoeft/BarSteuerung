#ifndef BACKEND_RESTSERVER_H
#define BACKEND_RESTSERVER_H

#include <memory>
#include <cstdlib>
#include <restbed>


#include "LedController.h"

class RestServer {
public:
    RestServer(LedController*);
    ~RestServer();

    bool init();
    void start(void (*ready_handler)(restbed::Service&));


private:
    const int PORT = 7979;

    restbed::Service* service;
    LedController* ledController;

    std::shared_ptr<restbed::Resource> testResource;
    std::shared_ptr<restbed::Settings> settings;

    static void test_handler(std::shared_ptr<restbed::Session>);
};


#endif //BACKEND_RESTSERVER_H
