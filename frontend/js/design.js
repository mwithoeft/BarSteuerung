$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.tabs').tabs();
});

var colorPickerStaticColor = new iro.ColorPicker("#colorpicker_static_color", {
    width: 320,
    color: "#f00"
});

colorPickerStaticColor.on('input:end', function (color) {
    let request = `${address}staticColor?r=${color.rgb.r}&g=${color.rgb.g}&b=${color.rgb.b}`;
    $.ajax({
        url: request,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({html: 'Fehler!'})
        }
    });
});