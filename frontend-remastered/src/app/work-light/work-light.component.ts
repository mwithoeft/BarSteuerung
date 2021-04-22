import { Component, NgZone, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { WorkLightService } from './work-light.service';

declare var iro: any;

@Component({
  selector: 'app-work-light',
  templateUrl: './work-light.component.html',
  styleUrls: ['./work-light.component.less'],
})
export class WorkLightComponent implements OnInit {
  colorPicker: any;

  constructor(
    private ngZone: NgZone,
    private workLightService: WorkLightService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.colorPicker = new iro.ColorPicker('#color-picker-container');
    this.colorPicker.on('color:change', (color) =>
      this.ngZone.run(() => this.onColorChange(color))
    );
  }

  onColorChange(color) {


    let r: string = color.rgb.r;
    let g: string = color.rgb.g;
    let b: string = color.rgb.b;

    this.workLightService.setWorkLightColor(r, g, b).subscribe(
      () => this.pushSuccessToast("Farbe für Arbeitslicht gesetzt."),
      () => this.pushErrorToast("Farbe für Arbeitslicht nicht gesetzt!"),
      () => this.pushSuccessToast("Farbe für Arbeitslicht gesetzt.")
    );
  }

  pushSuccessToast(message: string) {
    this.messageService.add({severity:'success', summary:'Erfolg', detail:`${message}`});
  }

  pushErrorToast(message: string) {
    this.messageService.add({severity:'error', summary:'Fehler', detail:`${message}`});
  }
}
