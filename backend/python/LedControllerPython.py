from yeelight import *
from yeelight.transitions import *

bulb1 = Bulb("192.168.178.77", auto_on=True)
bulb2 = Bulb("192.168.178.78", auto_on=True)
bulb3 = Bulb("192.168.178.79", auto_on=True)
bulb4 = Bulb("192.168.178.80", auto_on=True)
bulb5 = Bulb("192.168.178.81", auto_on=True)
bulb6 = Bulb("192.168.178.82", auto_on=True)
allBulbsArray = [bulb1, bulb2, bulb3, bulb4, bulb5, bulb6]


def string_to_array(bulb_string):
    bulb_string = "".join(bulb_string.split())
    bulbs = [int(numeric_string) for numeric_string in bulb_string.split(",")]
    return bulbs


def bulb_off(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.turn_off()
            except main.BulbException:
                success_all = False
    return success_all


def bulb_default(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.set_rgb(255, 255, 255)
                bulb.set_brightness(100)
                bulb.set_color_temp(6500)
                bulb.set_default()
            except main.BulbException:
                success_all = False
    return success_all


def bulb_disco(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    disco_flow = Flow(count=0, transitions=disco())
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.start_flow(disco_flow)
            except main.BulbException:
                success_all = False
    return success_all


def bulb_police(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    police_flow = Flow(count=0, transitions=police())
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.start_flow(police_flow)
            except main.BulbException:
                success_all = False
    return success_all


def bulb_random(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    random_flow = Flow(count=0, transitions=random_loop())
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.start_flow(random_flow)
            except main.BulbException:
                success_all = False
    return success_all


def bulb_strobe(bulb_string):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    strobe_flow = Flow(count=0, transitions=strobe())
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                bulb.start_flow(strobe_flow)
            except main.BulbException:
                success_all = False
    return success_all


def exec_query(mode, r, g, b, bulbs, kelvin, brightness):
    print("Mode in Python:", mode)
    print("R in Python:", r)
    print("G in Python:", g)
    print("B in Python:", b)
    print("Bulbs in Python:", bulbs)
    print("Kelvin in Python:", kelvin)
    print("Brightness in Python:", brightness)

    return True
