#include "../header/RestServer.h"

LedController* RestServer::ledController;

RestServer::RestServer(LedController* ledController) {
    RestServer::ledController = ledController;
    service = new restbed::Service();
}

RestServer::~RestServer() {
    delete service;
}

bool RestServer::init() {
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

    settings = std::make_shared<restbed::Settings>();
    settings->set_port(PORT);
    settings->set_default_header("Connection", "close");

    return true;
}

void RestServer::start(void (*ready_handler)(restbed::Service&)) {
    service->publish(staticColorResource);
    service->publish(offResource);
    service->publish(rainbowStaticResource);
    service->publish(rainbowFloatingResource);

    service->set_ready_handler(ready_handler);
    service->start(settings);


}

void RestServer::static_color_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->setColor(50, 50, 50);
    ledController->setPattern(LedController::Pattern::STATIC_COLOR);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::off_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->setColor(0, 0, 0);
    ledController->setPattern(LedController::Pattern::OFF);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::rainbow_static_handler(std::shared_ptr<restbed::Session> session) {
    ledController->setPattern(LedController::Pattern::RAINBOW_STATIC);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::rainbow_floating_handler(const std::shared_ptr<restbed::Session> session) {
    //ledController->setColor(0, 0, 0);
    //ledController->setPattern(LedController::Pattern::OFF);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}