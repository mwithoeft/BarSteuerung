import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { CeilingLightService } from '../ceiling-light.service';

@Component({
  selector: 'app-color-ceiling',
  templateUrl: './color-ceiling.component.html',
  styleUrls: ['./color-ceiling.component.less'],
})
export class ColorCeilingComponent {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor(private ceilingLightService: CeilingLightService) {}

  onColorChange(r: number, g: number, b: number, brightness: number) {
    if (r < 1) r = 1;
    if (g < 1) g = 1;
    if (b < 1) b = 1;
    if (brightness < 1) brightness = 1;
    this.ceilingLightService
      .sendRequest({
        mode: 'STATIC_COLOR',
        r: r.toString(),
        g: g.toString(),
        b: b.toString(),
        kelvin: '',
        brightness: brightness.toString(),
      })
      .subscribe(
        (response) => {
          if (response === 'WARNING') {
            this.emitToast.emit({
              type: 'warn',
              summary: 'Warnung',
              message:
                'Möglicherweise wurden nicht alle Deckenlichter angesprochen!',
            });
          } else {
            this.emitToast.emit({
              type: 'success',
              summary: 'Erfolg',
              message: 'Die Deckenlichter wurden geändert.',
            });
          }
        },
        () =>
          this.emitToast.emit({
            type: 'error',
            summary: 'Fehler',
            message: 'Deckenlichter konnten nicht erreicht werden!',
          })
      );
  }
}
