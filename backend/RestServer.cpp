#include "header/RestServer.h"


RestServer::RestServer() {
    service = new restbed::Service();
}

RestServer::~RestServer() {
    delete service;
}

bool RestServer::init() {

    testResource = std::make_shared<restbed::Resource>();
    testResource->set_path("/test");
    testResource->set_method_handler("GET", test_handler);

    settings = std::make_shared<restbed::Settings>();
    settings->set_port(PORT);
    settings->set_default_header("Connection", "close");

    return true;
}

void RestServer::start(void (*ready_handler)(restbed::Service&)) {
    service->publish(testResource);

    service->set_ready_handler(ready_handler);
    service->start(settings);
}

void RestServer::test_handler(const std::shared_ptr<restbed::Session> session) {


    std::string testStr = "Test erfolgreich";

    session->close(restbed::OK, testStr.c_str(), { { "Content-Length", std::to_string(testStr.size()) } } );
}