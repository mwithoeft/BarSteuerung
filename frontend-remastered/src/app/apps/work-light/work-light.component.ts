import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'src/app/shared-apps/toast-interface';
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
    this.workLightService.setWorkLightColor(r, g, b).subscribe(
      () =>
        this.pushToast({
          type: 'success',
          summary: 'Erfolg',
          message: 'Farbe für Arbeitslicht gesetzt.',
        }),
      () =>
        this.pushToast({
          type: 'error',
          summary: 'Fehler',
          message: 'Farbe für Arbeitslicht nicht gesetzt!',
        })
    );
  }

  pushToast(toast: Toast) {
    this.messageService.add({
      severity: toast.type,
      summary: toast.summary,
      detail: toast.message,
    });
  }
}
