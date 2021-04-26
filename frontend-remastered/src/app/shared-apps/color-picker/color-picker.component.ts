import {
  AfterViewInit,
  ElementRef,
  EventEmitter,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import iro from '@jaames/iro';
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.less'],
})
export class ColorPickerComponent implements AfterViewInit {
  @Output() onInputRGB: EventEmitter<any> = new EventEmitter();

  @ViewChild('colorPickerContainer') colorPickerContainer: ElementRef;

  colorPicker: IroColorPicker;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.colorPicker = iro.ColorPicker(
      this.colorPickerContainer.nativeElement,
      {}
    );
    this.colorPicker.on('input:end', (color) =>
      this.ngZone.run(() =>
        this.onInputRGB.emit([
          color.rgb.r,
          color.rgb.g,
          color.rgb.b,
          color.value,
        ])
      )
    );
  }
}
