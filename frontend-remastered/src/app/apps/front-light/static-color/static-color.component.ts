import { Component, EventEmitter, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { FrontLightService } from '../front-light.service';

@Component({
  selector: 'app-static-color',
  templateUrl: './static-color.component.html',
  styleUrls: ['./static-color.component.less']
})
export class StaticColorComponent {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor(private frontLightService: FrontLightService) { }

  onColorChange(r: string, g: string, b: string){
    this.frontLightService.setStaticColor(r, g, b).subscribe(
      () =>
        this.emitToast.emit({
          type: 'success',
          summary: 'Erfolg',
          message: 'Farbe für Frontlicht gesetzt.',
        }),
      () =>
        this.emitToast.emit({
          type: 'error',
          summary: 'Fehler',
          message: 'Farbe für Frontlicht nicht gesetzt!',
        })
    );
  }

}
