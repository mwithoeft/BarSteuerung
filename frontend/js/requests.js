$(document).ready(function () {
    powerplug_status();
});


var address = "http://192.168.178.100:7979/";

var led_off = function () {
    $.ajax({
        url: `${address}off`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var led_static_rainbow = function () {
    $.ajax({
        url: `${address}staticRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var led_floating_rainbow = function () {
    $.ajax({
        url: `${address}floatingRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var led_static_split = function () {
    if (ledUserColorsSplit.length < 2) {
        M.toast({ html: 'Mindestens 2!' })
        return;
    }
    $.ajax({
        url: `${address}staticSplit?array=${JSON.parse(JSON.stringify(ledUserColorsSplit))}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var led_floating_split = function () {
    if (ledUserColorsSplit.length < 2) {
        M.toast({ html: 'Mindestens 2!' })
        return;
    }
    $.ajax({
        url: `${address}floatingSplit?array=${JSON.parse(JSON.stringify(ledUserColorsSplit))}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var led_set_speed = function (speed) {
    speed = 1200000 - speed + 100;
    $.ajax({
        url: `${address}setSpeed?speed=${speed}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var led_pulse = function () {
    if (ledUserColorsSplit.length < 2) {
        M.toast({ html: 'Mindestens 2!' })
        return;
    }
    $.ajax({
        url: `${address}pulse?array=${JSON.parse(JSON.stringify(ledUserColorsSplit))}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var powerplug_status = function () {
    $.ajax({
        url: `${address}powerPlugsStatus`,
        type: 'GET',
        success: function (res) {
            res = res.trim();
            lines = res.split("\n");
            changeTVFrontButton((lines[0] == "1"));
            changeTVBackButton((lines[1] == "1"));
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler Steckdosenstatus!' })
        }
    });
}

var powerplug_all_on = function () {
    $.ajax({
        url: `${address}allPowerPlugsOn`,
        type: 'GET',
        success: function (res) {
            changeTVFrontButton(true);
            changeTVBackButton(true);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var powerplug_all_off = function () {
    $.ajax({
        url: `${address}allPowerPlugsOff`,
        type: 'GET',
        success: function (res) {
            changeTVFrontButton(false);
            changeTVBackButton(false);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var powerplug_front_on = function () {
    $.ajax({
        url: `${address}frontTVOn`,
        type: 'GET',
        success: function (res) {
            changeTVFrontButton(true);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var powerplug_front_off = function () {
    $.ajax({
        url: `${address}frontTVOff`,
        type: 'GET',
        success: function (res) {
            changeTVFrontButton(false);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var powerplug_back_on = function () {
    $.ajax({
        url: `${address}backTVOn`,
        type: 'GET',
        success: function (res) {
            changeTVBackButton(true);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}
var powerplug_back_off = function () {
    $.ajax({
        url: `${address}backTVOff`,
        type: 'GET',
        success: function (res) {
            changeTVBackButton(false);
        },
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
}

var ceiling_light_request = function () {
    let query = `mode=${ceiling_light_object.mode}&r=${ceiling_light_object.r}&g=${ceiling_light_object.g}&b=${ceiling_light_object.b}&bulbs=${ceiling_light_object.bulbs}&kelvin=${ceiling_light_object.kelvin}&brightness=${ceiling_light_object.brightness}`;
    $.ajax({
        url: `${address}ceilingLight?${query}`,
        type: 'GET',
        success: function(res) {
            if (res === "WARNING") {
                M.toast({html: 'WARNUNG: Möglicherweise wurden nicht alle ausgewählten Glühbirnen angesprochen!'})
            }
        },
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler bei Backend Verbindung!'})
        }
    });
};