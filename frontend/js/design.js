$(document).ready(function () {
    $('.collapsible').collapsible();
});

var colorPickerFront = new iro.ColorPicker("#colorpicker_front", {
    width: 320,
    color: "#f00"
});

colorPickerFront.on('input:end', function (color) {
    console.log(color.rgb.r);
    console.log(color.rgb.g);
    console.log(color.rgb.b);
});

