#include <sstream>
#include <iostream>
#include "../header/RestServer.h"

LedController* RestServer::ledController;
BulbController* RestServer::bulbController;
PlugHandler* RestServer::plugHandler;

RestServer::RestServer(LedController* ledController, BulbController* bulbController) {
    service = new restbed::Service();

    RestServer::plugHandler = new PlugHandler();
    RestServer::ledController = ledController;
    RestServer::bulbController = bulbController;
}

RestServer::~RestServer() {
    delete service;
    delete RestServer::plugHandler;
}

bool RestServer::init() {
    if (!plugHandler->setup()){
        std::cerr << "[ERROR] PlugHandler setup failed" << std::endl;
        return false;
    }

    /** LED Resources **/
    staticColorResource = std::make_shared<restbed::Resource>();
    staticColorResource->set_path("/staticColor");
    staticColorResource->set_method_handler("GET", static_color_handler);

    offResource = std::make_shared<restbed::Resource>();
    offResource->set_path("/off");
    offResource->set_method_handler("GET", off_handler);

    rainbowStaticResource = std::make_shared<restbed::Resource>();
    rainbowStaticResource->set_path("/staticRainbow");
    rainbowStaticResource->set_method_handler("GET", rainbow_static_handler);

    rainbowFloatingResource = std::make_shared<restbed::Resource>();
    rainbowFloatingResource->set_path("/floatingRainbow");
    rainbowFloatingResource->set_method_handler("GET", rainbow_floating_handler);

    splitStaticResource = std::make_shared<restbed::Resource>();
    splitStaticResource->set_path("/staticSplit");
    splitStaticResource->set_method_handler("GET", split_static_handler);

    splitFloatingResource = std::make_shared<restbed::Resource>();
    splitFloatingResource->set_path("/floatingSplit");
    splitFloatingResource->set_method_handler("GET", split_floating_handler);

    setSpeedResource = std::make_shared<restbed::Resource>();
    setSpeedResource->set_path("/setSpeed");
    setSpeedResource->set_method_handler("GET", set_speed_handler);

    pulseResource = std::make_shared<restbed::Resource>();
    pulseResource->set_path("/pulse");
    pulseResource->set_method_handler("GET", pulse_handler);

    workingAreaLedResource = std::make_shared<restbed::Resource>();
    workingAreaLedResource->set_path("/workingAreaColor");
    workingAreaLedResource->set_method_handler("GET", wokring_area_led_handler);

    /** PowerPlugs Resources **/
    powerPlugsStatusResource = std::make_shared<restbed::Resource>();
    powerPlugsStatusResource->set_path("/powerPlugsStatus");
    powerPlugsStatusResource->set_method_handler("GET", powerplugs_status_handler);

    allPowerPlugsOnResource = std::make_shared<restbed::Resource>();
    allPowerPlugsOnResource->set_path("/allPowerPlugsOn");
    allPowerPlugsOnResource->set_method_handler("GET", all_powerplugs_on_handler);

    allPowerPlugsOffResource = std::make_shared<restbed::Resource>();
    allPowerPlugsOffResource->set_path("/allPowerPlugsOff");
    allPowerPlugsOffResource->set_method_handler("GET", all_powerplugs_off_handler);

    frontTVOnResource = std::make_shared<restbed::Resource>();
    frontTVOnResource->set_path("/frontTVOn");
    frontTVOnResource->set_method_handler("GET", front_tv_on_handler);

    frontTVOffResource = std::make_shared<restbed::Resource>();
    frontTVOffResource->set_path("/frontTVOff");
    frontTVOffResource->set_method_handler("GET", front_tv_off_handler);

    backTVOnResource = std::make_shared<restbed::Resource>();
    backTVOnResource->set_path("/backTVOn");
    backTVOnResource->set_method_handler("GET", back_tv_on_handler);

    backTVOffResource = std::make_shared<restbed::Resource>();
    backTVOffResource->set_path("/backTVOff");
    backTVOffResource->set_method_handler("GET", back_tv_off_handler);

    ceilingLightResource = std::make_shared<restbed::Resource>();
    ceilingLightResource->set_path("/ceilingLight");
    ceilingLightResource->set_method_handler("GET", ceiling_light_handler);

    settings = std::make_shared<restbed::Settings>();
    settings->set_port(PORT);
    settings->set_default_header("Connection", "close");

    return true;
}

void RestServer::start(void (*ready_handler)(restbed::Service&)) {
    /** LED Resources **/
    service->publish(staticColorResource);
    service->publish(offResource);
    service->publish(rainbowStaticResource);
    service->publish(rainbowFloatingResource);
    service->publish(splitStaticResource);
    service->publish(splitFloatingResource);
    service->publish(setSpeedResource);
    service->publish(pulseResource);
    service->publish(workingAreaLedResource);

    /** Power Plugs Resources **/
    service->publish(powerPlugsStatusResource);
    service->publish(allPowerPlugsOnResource);
    service->publish(allPowerPlugsOffResource);
    service->publish(frontTVOnResource);
    service->publish(frontTVOffResource);
    service->publish(backTVOnResource);
    service->publish(backTVOffResource);

    /** Ceiling Light Resource **/
    service->publish(ceilingLightResource);

    settings->set_default_header( "Access-Control-Allow-Origin", "*" );
    service->set_ready_handler(ready_handler);
    service->start(settings);
}

void RestServer::static_color_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::stringstream r(request->get_query_parameter("r"));
    std::stringstream g(request->get_query_parameter("g"));
    std::stringstream b(request->get_query_parameter("b"));
    unsigned R, G, B;
    r >> R;
    g >> G;
    b >> B;
    ledController->setColor(R, G, B);
    ledController->setPattern(LedController::Pattern::STATIC_COLOR);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::off_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->setColor(0, 0, 0);
    ledController->setPattern(LedController::Pattern::OFF);

    std::string returnStr = "OK";

    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::rainbow_static_handler(std::shared_ptr<restbed::Session> session) {
    ledController->setPattern(LedController::Pattern::RAINBOW_STATIC);

    std::string returnStr = "OK";

    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::rainbow_floating_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->setPattern(LedController::Pattern::RAINBOW_FLOATING);

    std::string returnStr = "OK";

    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

void RestServer::split_static_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::string str = request->get_query_parameter("array");
    std::vector<int> vector;
    parseStrToVec(str, vector);

    ledController->clearUserColors();
    for (unsigned i = 0; i < vector.size(); i+=3) {
        ledController->addUserColor(Color{(unsigned char)vector[i], (unsigned char)vector[i+1], (unsigned char)vector[i+2]});
    }
    ledController->setPattern(LedController::Pattern::SPLIT_STATIC);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

void RestServer::split_floating_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::string str = request->get_query_parameter("array");
    std::vector<int> vector;
    parseStrToVec(str, vector);

    ledController->clearUserColors();
    for (unsigned i = 0; i < vector.size(); i+=3) {
        ledController->addUserColor(Color{(unsigned char)vector[i], (unsigned char)vector[i+1], (unsigned char)vector[i+2]});
    }
    ledController->setPattern(LedController::Pattern::SPLIT_FLOATING);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

void RestServer::pulse_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::string str = request->get_query_parameter("array");
    std::vector<int> vector;
    parseStrToVec(str, vector);

    ledController->clearUserColors();
    for (unsigned i = 0; i < vector.size(); i+=3) {
        ledController->addUserColor(Color{(unsigned char)vector[i], (unsigned char)vector[i+1], (unsigned char)vector[i+2]});
    }
    ledController->setPattern(LedController::Pattern::PULSE);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}


void RestServer::parseStrToVec(std::string str, std::vector<int>& vect){
    std::stringstream ss(str);
    for (int i; ss >> i;) {
        vect.push_back(i);
        if (ss.peek() == ',')
            ss.ignore();
    }
}

void RestServer::set_speed_handler(std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::stringstream speedStream(request->get_query_parameter("speed"));
    unsigned speed;
    speedStream >> speed;
    ledController->setSpeed(speed);

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

void RestServer::wokring_area_led_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::stringstream r(request->get_query_parameter("r"));
    std::stringstream g(request->get_query_parameter("g"));
    std::stringstream b(request->get_query_parameter("b"));
    unsigned R, G, B;
    r >> R;
    g >> G;
    b >> B;
    ledController->setWorkingAreaColor(R, G, B);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

/** PowerPlug Handler **/
void RestServer::powerplugs_status_handler(std::shared_ptr<restbed::Session> session) {
    std::string returnStr = plugHandler->getStatus();
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::all_powerplugs_on_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->allOn();
    plugHandler->writeStatusFile();
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::all_powerplugs_off_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->allOff();
    plugHandler->writeStatusFile();

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::front_tv_on_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->onTVFront();
    plugHandler->writeStatusFile();

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::front_tv_off_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->offTVFront();
    plugHandler->writeStatusFile();

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::back_tv_on_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->onTVBack();
    plugHandler->writeStatusFile();

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}
void RestServer::back_tv_off_handler(std::shared_ptr<restbed::Session> session) {
    plugHandler->offTVBack();
    plugHandler->writeStatusFile();

    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr.c_str(), { { "Content-Length", std::to_string(returnStr.size()) } } );
}

/** Ceiling Light Handler **/
void RestServer::ceiling_light_handler(std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::string mode = request->get_query_parameter("mode");
    std::string r = request->get_query_parameter("r");
    std::string g = request->get_query_parameter("g");
    std::string b = request->get_query_parameter("b");
    std::string bulbs =  request->get_query_parameter("bulbs");
    std::string kelvin = request->get_query_parameter("kelvin");
    std::string brightness = request->get_query_parameter("brightness");

    bulbController->setValues(mode, r, g, b, bulbs, kelvin, brightness);
    std::string returnStr = "OK";
    session->close(restbed::OK, returnStr, { { "Content-Length", std::to_string(returnStr.size()) } } );
}