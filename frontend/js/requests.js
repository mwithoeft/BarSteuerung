var address = "http://192.168.178.100:7979/";

function led_off() {
    $.ajax({
        url: `${address}off`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}

function led_static_rainbow() {
    $.ajax({
        url: `${address}staticRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}
function led_floating_rainbow() {
    $.ajax({
        url: `${address}floatingRainbow`,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
}