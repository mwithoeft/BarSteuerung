#include <sstream>
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

    splitStaticResource = std::make_shared<restbed::Resource>();
    splitStaticResource->set_path("/staticSplit");
    splitStaticResource->set_method_handler("GET", split_static_handler);

    splitFloatingResource = std::make_shared<restbed::Resource>();
    splitFloatingResource->set_path("/floatingSplit");
    splitFloatingResource->set_method_handler("GET", split_floating_handler);

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
    service->publish(splitStaticResource);
    service->publish(splitFloatingResource);

    settings->set_default_header( "Access-Control-Allow-Origin", "*" );
    service->set_ready_handler(ready_handler);
    service->start(settings);
}

void RestServer::static_color_handler(const std::shared_ptr<restbed::Session> session) {
    const auto request = session->get_request();
    std::stringstream r(request->get_query_parameter("r"));
    std::stringstream g(request->get_query_parameter("g"));
    std::stringstream b(request->get_query_parameter("b"));
    int R;
    int G;
    int B;
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

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}
void RestServer::rainbow_static_handler(std::shared_ptr<restbed::Session> session) {
    ledController->setPattern(LedController::Pattern::RAINBOW_STATIC);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::rainbow_floating_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->setPattern(LedController::Pattern::RAINBOW_FLOATING);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::split_static_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->clearUserColors();

    /** Beispiel Anfang **/
    ledController->addUserColor(Color{255, 0, 0});
    ledController->addUserColor(Color{0, 255, 0});
    ledController->addUserColor(Color{0, 0, 255});
    ledController->addUserColor(Color{139, 69, 19});
    /** Beispiel Ende **/

    ledController->setPattern(LedController::Pattern::SPLIT_STATIC);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}

void RestServer::split_floating_handler(const std::shared_ptr<restbed::Session> session) {
    ledController->clearUserColors();

    /** Beispiel Anfang **/
    ledController->addUserColor(Color{255, 0, 0});
    ledController->addUserColor(Color{0, 255, 0});
    ledController->addUserColor(Color{0, 0, 255});
    ledController->addUserColor(Color{139, 69, 19});
    /** Beispiel Ende **/

    ledController->setPattern(LedController::Pattern::SPLIT_FLOATING);

    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}