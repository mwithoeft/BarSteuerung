from yeelight import *

bulb1 = Bulb("192.168.178.77", auto_on=True)
bulb2 = Bulb("192.168.178.78", auto_on=True)
bulb3 = Bulb("192.168.178.79", auto_on=True)
bulb4 = Bulb("192.168.178.80", auto_on=True)
bulb5 = Bulb("192.168.178.81", auto_on=True)
bulb6 = Bulb("192.168.178.82", auto_on=True)
bulbArray = [bulb1, bulb2, bulb3, bulb4, bulb5, bulb6]


def all_on():
    success_all = True
    for bulb in bulbArray:
        try:
            bulb.turn_on()
        except main.BulbException:
            success_all = False
    return success_all


def all_off():
    success_all = True
    for bulb in bulbArray:
        try:
            bulb.turn_off()
        except main.BulbException:
            success_all = False
    return success_all
