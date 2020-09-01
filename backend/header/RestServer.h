#ifndef BACKEND_RESTSERVER_H
#define BACKEND_RESTSERVER_H

#include <memory>
#include <cstdlib>
#include <restbed>


#include "LedController.h"
#include "PlugHandler.h"

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
    static PlugHandler* plugHandler;

    std::shared_ptr<restbed::Settings> settings;

    /** LED Resources **/
    std::shared_ptr<restbed::Resource> staticColorResource;
    std::shared_ptr<restbed::Resource> offResource;
    std::shared_ptr<restbed::Resource> rainbowStaticResource;
    std::shared_ptr<restbed::Resource> rainbowFloatingResource;
    std::shared_ptr<restbed::Resource> splitStaticResource;
    std::shared_ptr<restbed::Resource> splitFloatingResource;
    std::shared_ptr<restbed::Resource> setSpeedResource;
    std::shared_ptr<restbed::Resource> pulseResource;

    /** PowerPlugs Resources **/
    std::shared_ptr<restbed::Resource> powerPlugsStatusResource;
    std::shared_ptr<restbed::Resource> allPowerPlugsOnResource;
    std::shared_ptr<restbed::Resource> allPowerPlugsOffResource;
    std::shared_ptr<restbed::Resource> frontTVOnResource;
    std::shared_ptr<restbed::Resource> frontTVOffResource;
    std::shared_ptr<restbed::Resource> backTVOnResource;
    std::shared_ptr<restbed::Resource> backTVOffResource;

    /** LED Handler **/
    static void static_color_handler(std::shared_ptr<restbed::Session >);
    static void off_handler(std::shared_ptr<restbed::Session >);
    static void rainbow_static_handler(std::shared_ptr<restbed::Session >);
    static void rainbow_floating_handler(std::shared_ptr<restbed::Session >);
    static void split_static_handler(std::shared_ptr<restbed::Session >);
    static void split_floating_handler(std::shared_ptr<restbed::Session >);
    static void set_speed_handler(std::shared_ptr<restbed::Session >);
    static void pulse_handler(std::shared_ptr<restbed::Session >);

    /** PowerPlug Handler **/
    static void powerplugs_status_handler(std::shared_ptr<restbed::Session >);
    static void all_powerplugs_on_handler(std::shared_ptr<restbed::Session >);
    static void all_powerplugs_off_handler(std::shared_ptr<restbed::Session >);
    static void front_tv_on_handler(std::shared_ptr<restbed::Session >);
    static void front_tv_off_handler(std::shared_ptr<restbed::Session >);
    static void back_tv_on_handler(std::shared_ptr<restbed::Session >);
    static void back_tv_off_handler(std::shared_ptr<restbed::Session >);



    static void parseStrToVec(std::string, std::vector<int>&);
};


#endif //BACKEND_RESTSERVER_H
