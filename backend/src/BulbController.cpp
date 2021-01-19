#include <iostream>
#include <thread>
#include "../header/BulbController.h"

BulbController::BulbController() {
    setenv("PYTHONPATH","./../python/",1);
    helperInstance = new CPyInstance();
}

BulbController::~BulbController() {
    delete helperInstance;
}


bool BulbController::forwardQuery(std::string mode, std::string r, std::string g, std::string b, std::string bulbs, std::string kelvin, std::string brightness) {
    if(pFunc && PyCallable_Check(pFunc)) {
        CPyObject pArgs = PyTuple_New(7);
        PyTuple_SetItem(pArgs, 0, PyUnicode_FromString(mode.c_str()));
        PyTuple_SetItem(pArgs, 1, PyUnicode_FromString(r.c_str()));
        PyTuple_SetItem(pArgs, 2, PyUnicode_FromString(g.c_str()));
        PyTuple_SetItem(pArgs, 3, PyUnicode_FromString(b.c_str()));
        PyTuple_SetItem(pArgs, 4, PyUnicode_FromString(bulbs.c_str()));
        PyTuple_SetItem(pArgs, 5, PyUnicode_FromString(kelvin.c_str()));
        PyTuple_SetItem(pArgs, 6, PyUnicode_FromString(brightness.c_str()));
        CPyObject pValue = PyObject_CallObject(pFunc, pArgs);

        return (PyObject_IsTrue(pValue));
    }
    return false;
}

bool BulbController::setup() {
    pName = PyUnicode_FromString("LedControllerPython");
    pModule = PyImport_Import(pName);
    if(pModule) {
        pFunc = PyObject_GetAttrString(pModule, "exec_query");
        return true;
    }
    return false;
}


