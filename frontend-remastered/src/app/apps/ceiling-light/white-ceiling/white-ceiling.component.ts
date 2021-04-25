import { Component, EventEmitter, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { CeilingLightService } from '../ceiling-light.service';

@Component({
  selector: 'app-white-ceiling',
  templateUrl: './white-ceiling.component.html',
  styleUrls: ['./white-ceiling.component.less']
})
export class WhiteCeilingComponent {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor(private ceilingLightService: CeilingLightService) { }


  onColorChange(kelvin: number, brightness: number) {
    if (brightness < 1) brightness = 1;

    this.ceilingLightService
      .sendRequest({
        mode: 'WHITE',
        r: '',
        g: '',
        b: '',
        kelvin: kelvin.toString(),
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
