# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.18

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Disable VCS-based implicit rules.
% : %,v


# Disable VCS-based implicit rules.
% : RCS/%


# Disable VCS-based implicit rules.
% : RCS/%,v


# Disable VCS-based implicit rules.
% : SCCS/s.%


# Disable VCS-based implicit rules.
% : s.%


.SUFFIXES: .hpux_make_needs_suffix_list


# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/bin/cmake

# The command to remove a file.
RM = /usr/local/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/pi/development/backend

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/pi/development/backend/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/backend.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/backend.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/backend.dir/flags.make

CMakeFiles/backend.dir/main.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/backend.dir/main.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/main.cpp.o -c /home/pi/development/backend/main.cpp

CMakeFiles/backend.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/main.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/main.cpp > CMakeFiles/backend.dir/main.cpp.i

CMakeFiles/backend.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/main.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/main.cpp -o CMakeFiles/backend.dir/main.cpp.s

CMakeFiles/backend.dir/src/RestServer.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/src/RestServer.cpp.o: ../src/RestServer.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/backend.dir/src/RestServer.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/src/RestServer.cpp.o -c /home/pi/development/backend/src/RestServer.cpp

CMakeFiles/backend.dir/src/RestServer.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/src/RestServer.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/src/RestServer.cpp > CMakeFiles/backend.dir/src/RestServer.cpp.i

CMakeFiles/backend.dir/src/RestServer.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/src/RestServer.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/src/RestServer.cpp -o CMakeFiles/backend.dir/src/RestServer.cpp.s

CMakeFiles/backend.dir/src/LedController.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/src/LedController.cpp.o: ../src/LedController.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/backend.dir/src/LedController.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/src/LedController.cpp.o -c /home/pi/development/backend/src/LedController.cpp

CMakeFiles/backend.dir/src/LedController.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/src/LedController.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/src/LedController.cpp > CMakeFiles/backend.dir/src/LedController.cpp.i

CMakeFiles/backend.dir/src/LedController.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/src/LedController.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/src/LedController.cpp -o CMakeFiles/backend.dir/src/LedController.cpp.s

CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o: ../lib/ws281x/ws281x.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o -c /home/pi/development/backend/lib/ws281x/ws281x.cpp

CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/lib/ws281x/ws281x.cpp > CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.i

CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/lib/ws281x/ws281x.cpp -o CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.s

CMakeFiles/backend.dir/src/RCSwitch.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/src/RCSwitch.cpp.o: ../src/RCSwitch.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/backend.dir/src/RCSwitch.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/src/RCSwitch.cpp.o -c /home/pi/development/backend/src/RCSwitch.cpp

CMakeFiles/backend.dir/src/RCSwitch.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/src/RCSwitch.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/src/RCSwitch.cpp > CMakeFiles/backend.dir/src/RCSwitch.cpp.i

CMakeFiles/backend.dir/src/RCSwitch.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/src/RCSwitch.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/src/RCSwitch.cpp -o CMakeFiles/backend.dir/src/RCSwitch.cpp.s

CMakeFiles/backend.dir/src/PlugHandler.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/src/PlugHandler.cpp.o: ../src/PlugHandler.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object CMakeFiles/backend.dir/src/PlugHandler.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/src/PlugHandler.cpp.o -c /home/pi/development/backend/src/PlugHandler.cpp

CMakeFiles/backend.dir/src/PlugHandler.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/src/PlugHandler.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/src/PlugHandler.cpp > CMakeFiles/backend.dir/src/PlugHandler.cpp.i

CMakeFiles/backend.dir/src/PlugHandler.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/src/PlugHandler.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/src/PlugHandler.cpp -o CMakeFiles/backend.dir/src/PlugHandler.cpp.s

CMakeFiles/backend.dir/src/BulbController.cpp.o: CMakeFiles/backend.dir/flags.make
CMakeFiles/backend.dir/src/BulbController.cpp.o: ../src/BulbController.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object CMakeFiles/backend.dir/src/BulbController.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/backend.dir/src/BulbController.cpp.o -c /home/pi/development/backend/src/BulbController.cpp

CMakeFiles/backend.dir/src/BulbController.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/backend.dir/src/BulbController.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/development/backend/src/BulbController.cpp > CMakeFiles/backend.dir/src/BulbController.cpp.i

CMakeFiles/backend.dir/src/BulbController.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/backend.dir/src/BulbController.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/development/backend/src/BulbController.cpp -o CMakeFiles/backend.dir/src/BulbController.cpp.s

# Object files for target backend
backend_OBJECTS = \
"CMakeFiles/backend.dir/main.cpp.o" \
"CMakeFiles/backend.dir/src/RestServer.cpp.o" \
"CMakeFiles/backend.dir/src/LedController.cpp.o" \
"CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o" \
"CMakeFiles/backend.dir/src/RCSwitch.cpp.o" \
"CMakeFiles/backend.dir/src/PlugHandler.cpp.o" \
"CMakeFiles/backend.dir/src/BulbController.cpp.o"

# External object files for target backend
backend_EXTERNAL_OBJECTS =

backend: CMakeFiles/backend.dir/main.cpp.o
backend: CMakeFiles/backend.dir/src/RestServer.cpp.o
backend: CMakeFiles/backend.dir/src/LedController.cpp.o
backend: CMakeFiles/backend.dir/lib/ws281x/ws281x.cpp.o
backend: CMakeFiles/backend.dir/src/RCSwitch.cpp.o
backend: CMakeFiles/backend.dir/src/PlugHandler.cpp.o
backend: CMakeFiles/backend.dir/src/BulbController.cpp.o
backend: CMakeFiles/backend.dir/build.make
backend: CMakeFiles/backend.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/pi/development/backend/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Linking CXX executable backend"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/backend.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/backend.dir/build: backend

.PHONY : CMakeFiles/backend.dir/build

CMakeFiles/backend.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/backend.dir/cmake_clean.cmake
.PHONY : CMakeFiles/backend.dir/clean

CMakeFiles/backend.dir/depend:
	cd /home/pi/development/backend/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/pi/development/backend /home/pi/development/backend /home/pi/development/backend/cmake-build-debug /home/pi/development/backend/cmake-build-debug /home/pi/development/backend/cmake-build-debug/CMakeFiles/backend.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/backend.dir/depend

