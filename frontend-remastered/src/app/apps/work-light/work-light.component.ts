import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { WorkLightService } from './work-light.service';

@Component({
  selector: 'app-work-light',
  templateUrl: './work-light.component.html',
  styleUrls: ['./work-light.component.less'],
})
export class WorkLightComponent {
  colorPicker: any;

  constructor(
    private workLightService: WorkLightService,
    private messageService: MessageService
  ) {}

  onColorChange(r: string, g: string, b: string) {
    console.log("Test")
    this.workLightService.setWorkLightColor(r, g, b).subscribe(
      () => this.pushSuccessToast('Farbe für Arbeitslicht gesetzt.'),
      () => this.pushErrorToast('Farbe für Arbeitslicht nicht gesetzt!')
    );
  }

  pushSuccessToast(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Erfolg',
      detail: `${message}`,
    });
  }

  pushErrorToast(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Fehler',
      detail: `${message}`,
    });
  }
}
