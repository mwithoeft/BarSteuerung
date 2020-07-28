var led_tabs;
var page_collapsible;

var ledUserColorsSplit = [];

$(document).ready(function () {
    page_collapsible = M.Collapsible.init(document.querySelector("#page_collapsible"), {
        onOpenEnd: function (el) {
            if (led_tabs.index == 0) {
                fixLedTabIndicator();
            }
        }
    });
    led_tabs = M.Tabs.init(document.querySelector("#led_tabs"));
});

var fixLedTabIndicator = function () {
    if (typeof fixLedTabIndicator.done == 'undefined') {
        fixLedTabIndicator.done = false;
    }
    if (!fixLedTabIndicator.done) led_tabs.select("led_simple_pattern");
    fixLedTabIndicator.done = true;
}

var colorPickerLedStaticColor = new iro.ColorPicker("#colorpicker_led_static_color", {
    width: 250,
    color: "#f00",
    display: "block",
});

colorPickerLedStaticColor.on('input:end', function (color) {
    let request = `${address}staticColor?r=${color.rgb.r}&g=${color.rgb.g}&b=${color.rgb.b}`;
    $.ajax({
        url: request,
        type: 'GET',
        error: function (res) {
            console.log(res);
            M.toast({ html: 'Fehler!' })
        }
    });
});

var colorPickerLedSplit = new iro.ColorPicker("#colorpicker_led_split", {
    width: 250,
    color: "#f00",
    display: "block",
});

var addLedUserColor = function () {
    let index = ledUserColorsSplit.length / 3;
    if (index > 15) {
        M.toast({ html: 'Maximal 16!' })
        return;
    }
    let color = colorPickerLedSplit.color.rgb;
    ledUserColorsSplit.push(color.r);
    ledUserColorsSplit.push(color.g);
    ledUserColorsSplit.push(color.b);

    let colorPanel = document.querySelector("#usercolors_led_split");
    let button = document.createElement("button");
    button.dataset.index = index;
    button.classList.add("usercolors_led_split_button");

    button.style.backgroundColor = backgroundColor = 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    button.onclick = function () { removeLedUserColor(this) };
    colorPanel.appendChild(button);
}

var removeLedUserColor = function (button) {
    let index = button.dataset.index;
    ledUserColorsSplit.splice(index * 3, 3); //3 Elemente (R,G,B) an index*3 löschen
    button.parentNode.removeChild(button);
    //Neue Zuweisung von data-index
    let children = document.querySelector("#usercolors_led_split").children;
    for (let i = 0; i < children.length; i++)
        children[i].dataset.index = i;
}