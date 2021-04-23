import { EventEmitter, NgZone, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var iro: any;
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.less']
})
export class ColorPickerComponent implements OnInit {
  @Output() onInputRGB: EventEmitter<any> = new EventEmitter();
  
  colorPicker: any;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.colorPicker = new iro.ColorPicker('#color-picker-container');
    this.colorPicker.on('input:end', (color) =>
      this.ngZone.run(() => this.onInputRGB.emit([color.rgb.r, color.rgb.g, color.rgb.b]))
    );
  }

}
