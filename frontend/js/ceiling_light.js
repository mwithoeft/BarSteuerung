var ceiling_light_object = {
    mode: "",
    r: [],
    g: [],
    b: [],
    bulbs: [],
    kelvin: "",
    brightness: ""
};


var selected_light_bulbs = function() {
    let inputs = document.forms["ceiling_buttons_form"].getElementsByTagName("input");
    let bulbs = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            bulbs.push(i);
        }
    }
    ceiling_light_object.bulbs = bulbs;
}

var ceiling_light_disco = function() {
    selected_light_bulbs();
    ceiling_light_object.mode = "DISCO";
    ceiling_light_request(ceiling_light_object);
}

var ceiling_light_off = function () {
    selected_light_bulbs();
    ceiling_light_object.mode = "OFF";
    ceiling_light_request(ceiling_light_object);
}

var ceiling_light_police = function () {
    selected_light_bulbs();
    ceiling_light_object.mode = "POLICE";
    ceiling_light_request(ceiling_light_object);
}

var ceiling_light_random = function () {
    selected_light_bulbs();
    ceiling_light_object.mode = "RANDOM";
    ceiling_light_request(ceiling_light_object);
}

var ceiling_light_strobe = function () {
    selected_light_bulbs();
    ceiling_light_object.mode = "STROBE";
    ceiling_light_request(ceiling_light_object);
}

var ceiling_light_white = function(kelvin, brightness) {
    selected_light_bulbs();
    ceiling_light_object.mode = "WHITE";
    ceiling_light_object.kelvin = `${kelvin}`;
    ceiling_light_object.brightness = `${brightness}`;
    ceiling_light_request(ceiling_light_object);
};

var ceiling_static_color = function(r, g, b, brightness) {
    selected_light_bulbs();
    ceiling_light_object.mode = "STATIC_COLOR";
    ceiling_light_object.r = [];
    ceiling_light_object.r.push(r);
    ceiling_light_object.g = [];
    ceiling_light_object.g.push(g);
    ceiling_light_object.b = [];
    ceiling_light_object.b.push(b);
    ceiling_light_object.brightness = brightness;
    ceiling_light_request(ceiling_light_object);
}