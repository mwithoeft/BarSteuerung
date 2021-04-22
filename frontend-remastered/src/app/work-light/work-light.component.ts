import { Component, NgZone, OnInit } from '@angular/core';
import { WorkLightService } from './work-light.service';

declare var iro: any;

@Component({
  selector: 'app-work-light',
  templateUrl: './work-light.component.html',
  styleUrls: ['./work-light.component.less'],
})
export class WorkLightComponent implements OnInit {
  colorPicker: any;

  constructor(private ngZone: NgZone, workLightService: WorkLightService) {}

  ngOnInit(): void {
    this.colorPicker = new iro.ColorPicker('#color-picker-container');
    this.colorPicker.on('color:change', (color, changes) =>
      this.ngZone.run(() => this.onColorChange(color, changes))
    );
  }

  onColorChange(color, changes) {
    console.log(color);
  }
}
