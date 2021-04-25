from yeelight import *
from yeelight.transitions import *

bulb1 = Bulb("192.168.178.77", auto_on=True)
bulb2 = Bulb("192.168.178.78", auto_on=True)
bulb3 = Bulb("192.168.178.79", auto_on=True)
bulb4 = Bulb("192.168.178.80", auto_on=True)
bulb5 = Bulb("192.168.178.81", auto_on=True)
bulb6 = Bulb("192.168.178.82", auto_on=True)
bulb7 = Bulb("192.168.178.83", auto_on=True)
bulb8 = Bulb("192.168.178.84", auto_on=True)

ceiling1 = Bulb("192.168.178.87", auto_on=True)
allBulbsArray = [bulb1, bulb2, bulb3, bulb4, bulb5, bulb6, bulb7, bulb8, ceiling1]
""" 
    1) ceiling1 = MAIN
    2) ceiling1 = AMBIENT
"""


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


def bulb_white(bulb_string, kelvin, brightness):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                if bulb == ceiling1:
                    kelvin = 2700 if kelvin < 2700 else kelvin
                    if brightness == 1:
                        bulb.turn_off(LightType.Main)
                        bulb.turn_on(LightType.Ambient)
                    else:
                        bulb.set_color_temp(kelvin, LightType.Main)
                        bulb.set_brightness(brightness, LightType.Main)
                else:
                    bulb.set_rgb(255, 255, 255)
                    bulb.set_color_temp(kelvin)
                    bulb.set_brightness(brightness)
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
                if bulb == ceiling1:
                    bulb.turn_on(LightType.Ambient)
                    bulb.start_flow(disco_flow, LightType.Ambient)
                else:
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
                if bulb == ceiling1:
                    bulb.turn_on(LightType.Ambient)
                    bulb.start_flow(police_flow, LightType.Ambient)
                else:
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
                if bulb == ceiling1:
                    bulb.turn_on(LightType.Ambient)
                    bulb.start_flow(random_flow, LightType.Ambient)
                else:
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
                if bulb == ceiling1:
                    bulb.turn_on(LightType.Ambient)
                    bulb.start_flow(strobe_flow, LightType.Ambient)
                else:
                    bulb.start_flow(strobe_flow)
            except main.BulbException:
                success_all = False
    return success_all


def bulb_color(bulb_string, r, g, b, brightness):
    input_bulbs = string_to_array(bulb_string)
    success_all = True
    for num, bulb in enumerate(allBulbsArray):
        if num in input_bulbs:
            try:
                if bulb == ceiling1:
                    if brightness == 1:
                        bulb.turn_off(LightType.Ambient)
                    else:
                        bulb.turn_on(LightType.Ambient)
                        bulb.set_rgb(r, g, b, LightType.Ambient)
                        bulb.set_brightness(brightness, LightType.Ambient)
                else:
                    bulb.set_rgb(r, g, b)
                    bulb.set_brightness(brightness)
            except main.BulbException:
                success_all = False
    return success_all


def exec_query(mode, r, g, b, bulbs, kelvin, brightness):
    """print("Mode in Python:", mode)
    print("R in Python:", r)
    print("G in Python:", g)
    print("B in Python:", b)
    print("Bulbs in Python:", bulbs)
    print("Kelvin in Python:", kelvin)
    print("Brightness in Python:", brightness)"""

    if mode == "OFF":
        return bulb_off(bulbs)
    elif mode == "WHITE":
        return bulb_white(bulbs, int(kelvin), int(brightness))
    elif mode == "DISCO":
        return bulb_disco(bulbs)
    elif mode == "POLICE":
        return bulb_police(bulbs)
    elif mode == "RANDOM":
        return bulb_random(bulbs)
    elif mode == "STROBE":
        return bulb_strobe(bulbs)
    elif mode == "STATIC_COLOR":
        return bulb_color(bulbs, int(r), int(g), int(b), int(brightness))
    else:
        return False
