cmake_minimum_required(VERSION 3.15)
project(backend)

set(CMAKE_CXX_STANDARD 14)

file(GLOB ws281x_SRC
        "lib/ws281x/*.cpp"
        "lib/ws281x/*.hpp"
        )

add_executable(backend main.cpp header/RestServer.h src/RestServer.cpp header/LedController.h src/LedController.cpp ${ws281x_SRC} header/ColorConverter.h header/ColorConverter.h header/ColorConverter.h header/RCSwitch.h src/RCSwitch.cpp header/PlugHandler.h src/PlugHandler.cpp src/BulbController.cpp header/BulbController.h header/pyhelper.h)

target_link_libraries(backend -lpython3.7m)
target_link_libraries(backend -lwiringPi)
target_link_libraries(backend -lrestbed)
target_link_libraries(backend -lpthread)
target_link_libraries(backend -lbcm2835)
