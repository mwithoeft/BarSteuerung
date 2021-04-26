import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core';
import iro from '@jaames/iro';
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker';

@Component({
  selector: 'app-color-picker-white',
  templateUrl: './color-picker-white.component.html',
  styleUrls: ['./color-picker-white.component.less'],
})
export class ColorPickerWhiteComponent implements AfterViewInit {
  @Output() onInputWhite: EventEmitter<any> = new EventEmitter();

  @ViewChild('colorPickerContainerKelvin')
  colorPickerContainerKelvin: ElementRef;
  @ViewChild('colorPickerContainerBrightness')
  colorPickerContainerBrightness: ElementRef;

  colorPickerKelvin: IroColorPicker;
  colorPickerBrightness: IroColorPicker;

  kelvin: number = 6500;
  brightness: number = 100;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.colorPickerKelvin = iro.ColorPicker(
      this.colorPickerContainerKelvin.nativeElement,
      {
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
      }
    );

    this.colorPickerBrightness = iro.ColorPicker(
      this.colorPickerContainerBrightness.nativeElement,
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
