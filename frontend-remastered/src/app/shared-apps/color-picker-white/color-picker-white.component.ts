import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';

declare var iro: any;
@Component({
  selector: 'app-color-picker-white',
  templateUrl: './color-picker-white.component.html',
  styleUrls: ['./color-picker-white.component.less'],
})
export class ColorPickerWhiteComponent implements OnInit {
  @Output() onInputWhite: EventEmitter<any> = new EventEmitter();

  colorPickerKelvin: any;
  colorPickerBrightness: any;

  kelvin: number = 6500;
  brightness: number = 100;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.colorPickerKelvin = new iro.ColorPicker('#color-picker-kelvin', {
      layout: [
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'kelvin',
            maxTemperature: 6500,
            minTemperature: 2000,
          },
        },
      ],
    });

    this.colorPickerBrightness = new iro.ColorPicker(
      '#color-picker-brightness',
      {
        layout: [
          {
            component: iro.ui.Slider,
            options: {
              sliderType: 'value',
            },
          },
        ],
      }
    );
    this.colorPickerKelvin.on('input:end', (color) =>
      this.ngZone.run(() => {
        this.kelvin = Math.ceil(color.kelvin);
        this.emitEvent();
      })
    );
    this.colorPickerBrightness.on('input:end', (color) =>
      this.ngZone.run(() => {
        this.brightness = color.value;
        this.emitEvent();
      })
    );
  }

  emitEvent() {
    this.onInputWhite.emit([this.kelvin, this.brightness]);
  }
}
