import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
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
      () => this.pushSuccessToast('Farbe für Regallicht gesetzt.'),
      () => this.pushErrorToast('Farbe für Regallicht nicht gesetzt!')
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
