import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { CeilingLightService } from '../ceiling-light.service';

@Component({
  selector: 'app-simple-pattern-ceiling',
  templateUrl: './simple-pattern-ceiling.component.html',
  styleUrls: ['./simple-pattern-ceiling.component.less'],
})
export class SimplePatternCeilingComponent implements OnInit {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor(private ceilingLightService: CeilingLightService) {}

  ngOnInit(): void {}

  request(
    mode:
      | 'OFF'
      | 'DISCO'
      | 'RANDOM'
      | 'STROBE'
      | 'POLICE'
      | 'WHITE'
      | 'STATIC_COLOR'
  ) {
    this.ceilingLightService
      .sendRequest({
        mode: mode,
        r: '',
        g: '',
        b: '',
        kelvin: '',
        brightness: '',
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
