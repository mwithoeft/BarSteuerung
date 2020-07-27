var address = "http://192.168.178.100:7979/";

var led_off = function() {
    $.ajax({
        url: `${address}off`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}

var led_static_rainbow = function() {
    $.ajax({
        url: `${address}staticRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}
var led_floating_rainbow = function() {
    $.ajax({
        url: `${address}floatingRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}

var led_static_split = function() {
    if (ledUserColorsSplit.length < 2) {
        M.toast({html: 'Mindestens 2!'})
        return;
    }
    $.ajax({
        url: `${address}staticSplit?array=${JSON.parse(JSON.stringify(ledUserColorsSplit))}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}
var led_floating_split = function() {
    if (ledUserColorsSplit.length < 2) {
        M.toast({html: 'Mindestens 2!'})
        return;
    }
    $.ajax({
        url: `${address}floatingSplit?array=${JSON.parse(JSON.stringify(ledUserColorsSplit))}`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}