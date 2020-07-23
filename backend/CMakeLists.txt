cmake_minimum_required(VERSION 3.15)
project(backend)

set(CMAKE_CXX_STANDARD 14)

file(GLOB piLed_SRC
        "lib/PiLED/PiLED.cpp"
        "lib/PiLED/PiLED.h"
        "lib/PiLED/FastLED/*.cpp"
        "lib/PiLED/FastLED/*.h"
        )

add_executable(backend main.cpp header/RestServer.h src/RestServer.cpp header/LedController.h src/LedController.cpp ${piLed_SRC})


target_link_libraries(backend -lwiringPi)
target_link_libraries(backend -lrestbed)
target_link_libraries(backend -lpthread)
