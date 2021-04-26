import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { Color, FrontLightService } from '../front-light.service';

@Component({
  selector: 'app-split-color',
  templateUrl: './split-color.component.html',
  styleUrls: ['./split-color.component.less'],
})
export class SplitColorComponent {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  selectedColors: Color[] = [];
  currentColor: Color = { r: '255', g: '255', b: '255' };
  readonly minColors = 2;
  readonly maxColors = 14;

  constructor(private frontLightService: FrontLightService) {}

  setCurrentColor(r: string, g: string, b: string) {
    this.currentColor = { r, g, b };
  }

  addSelectedColor() {
    if (this.selectedColors.length < this.maxColors) {
      const color = new Color(
        this.currentColor.r,
        this.currentColor.g,
        this.currentColor.b
      );
      this.selectedColors.push(color);
    } else {
      this.emitToast.emit({
        type: 'error',
        summary: 'Fehler',
        message: 'Es sind maximal 14 Farben erlaubt!',
      });
    }
  }

  removeSelectedColor(color: Color) {
    this.selectedColors = this.selectedColors.filter(function (obj) {
      return !Object.is(obj, color);
    });
  }

  backgroundColorString(color: Color): string {
    return `rgb(${color.r},${color.g},${color.b})`;
  }

  splitColorRequest(type: 'staticSplit' | 'floatingSplit' | 'pulse') {
    if (this.selectedColors.length < this.minColors) {
      this.emitToast.emit({
        type: 'error',
        summary: 'Fehler',
        message: 'Es müssen mindestens 2 Farben gesetzt werden!',
      });
    } else {
      this.frontLightService.setSplitColor(type, this.selectedColors).subscribe(
        () =>
          this.emitToast.emit({
            type: 'success',
            summary: 'Erfolg',
            message: 'Farben für Frontlicht gesetzt.',
          }),
        () =>
          this.emitToast.emit({
            type: 'error',
            summary: 'Fehler',
            message: 'Farben für Frontlicht nicht gesetzt!',
          })
      );
    }
  }
}
