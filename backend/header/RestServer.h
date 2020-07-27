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
    static LedController* ledController;

    std::shared_ptr<restbed::Resource> staticColorResource;
    std::shared_ptr<restbed::Resource> offResource;
    std::shared_ptr<restbed::Resource> rainbowStaticResource;
    std::shared_ptr<restbed::Resource> rainbowFloatingResource;
    std::shared_ptr<restbed::Resource> splitStaticResource;
    std::shared_ptr<restbed::Resource> splitFloatingResource;


    std::shared_ptr<restbed::Settings> settings;

    static void static_color_handler(std::shared_ptr<restbed::Session >);
    static void off_handler(std::shared_ptr<restbed::Session >);
    static void rainbow_static_handler(std::shared_ptr<restbed::Session >);
    static void rainbow_floating_handler(std::shared_ptr<restbed::Session >);
    static void split_static_handler(std::shared_ptr<restbed::Session >);
    static void split_floating_handler(std::shared_ptr<restbed::Session >);



    static void parseStrToVec(std::string, std::vector<int>&);
};


#endif //BACKEND_RESTSERVER_H
