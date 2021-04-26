import { Component, EventEmitter, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { FrontLightService } from '../front-light.service';

@Component({
  selector: 'app-simple-pattern-front',
  templateUrl: './simple-pattern-front.component.html',
  styleUrls: ['./simple-pattern-front.component.less'],
})
export class SimplePatternFrontComponent {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor(private frontLightService: FrontLightService) {}

  rainbowStatic() {
    this.frontLightService.requestWithoutParams('staticRainbow').subscribe(
      () => {
        this.emitToast.emit({
          type: 'success',
          summary: 'Erfolg',
          message: 'Frontlicht als statischer Regenbogen gesetzt.',
        });
      },
      () =>
        this.emitToast.emit({
          type: 'error',
          summary: 'Fehler',
          message:
            'Frontlicht konnte nicht als statischer Regenbogen gesetzt werden!',
        })
    );
  }

  rainbowFloating() {
    this.frontLightService.requestWithoutParams('floatingRainbow').subscribe(
      () => {
        this.emitToast.emit({
          type: 'success',
          summary: 'Erfolg',
          message: 'Frontlicht als laufender Regenbogen gesetzt.',
        });
      },
      () =>
        this.emitToast.emit({
          type: 'error',
          summary: 'Fehler',
          message:
            'Frontlicht konnte nicht als laufender Regenbogen gesetzt werden!',
        })
    );
  }
}
