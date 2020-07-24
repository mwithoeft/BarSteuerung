cmake_minimum_required(VERSION 3.15)
project(backend)

set(CMAKE_CXX_STANDARD 14)

add_executable(backend main.cpp header/RestServer.h src/RestServer.cpp header/LedController.h src/LedController.cpp)


target_link_libraries(backend -lwiringPi)
target_link_libraries(backend -lrestbed)
target_link_libraries(backend -lpthread)
