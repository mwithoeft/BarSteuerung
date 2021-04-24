import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { ShelfLightService } from './shelf-light.service';

@Component({
  selector: 'app-shelf-light',
  templateUrl: './shelf-light.component.html',
  styleUrls: ['./shelf-light.component.less'],
})
export class ShelfLightComponent {
  constructor(
    private shelfLightService: ShelfLightService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onColorChange(r: string, g: string, b: string) {
    this.shelfLightService.setShelfLightColor(r, g, b).subscribe(
      () =>
        this.pushToast({
          type: 'success',
          summary: 'Erfolg',
          message: 'Farbe für Regallicht gesetzt.',
        }),
      () =>
        this.pushToast({
          type: 'error',
          summary: 'Fehler',
          message: 'Farbe für Regallicht nicht gesetzt!',
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
