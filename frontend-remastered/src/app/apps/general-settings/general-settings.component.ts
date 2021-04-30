import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { CeilingLightService } from '../ceiling-light/ceiling-light.service';
import { FrontLightService } from '../front-light/front-light.service';
import { ShelfLightService } from '../shelf-light/shelf-light.service';
import { WorkLightService } from '../work-light/work-light.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.less'],
})
export class GeneralSettingsComponent {
  constructor(
    private messageService: MessageService,
    private frontLightService: FrontLightService,
    private workLightService: WorkLightService,
    private shelfLightService: ShelfLightService,
    private ceilingLightService: CeilingLightService
  ) {}

  party() {
    this.selectAllCeilingLights();

    let $frontSpeed = this.frontLightService.setSpeed(100);
    let $frontColor = this.frontLightService.requestWithoutParams(
      'floatingRainbow'
    );
    let $work = this.workLightService.setWorkLightColor('0', '255', '0');
    let $shelf = this.shelfLightService.setShelfLightColor('255', '0', '0');
    let $ceiling = this.ceilingLightService.sendRequest({
      mode: 'DISCO',
      r: '',
      g: '',
      b: '',
      kelvin: '',
      brightness: '',
    });

    forkJoin([$frontSpeed, $frontColor, $work, $shelf, $ceiling]).subscribe(
      (results) => {
        if (results[4] === 'WARNING') {
          this.pushToast({
            type: 'warn',
            summary: 'Warnung',
            message:
              'Möglicherweise wurden nicht alle Deckenlichter angesprochen!',
          });
        } else {
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Die Lichter wurden für Party eingestellt.',
          });
          this.turnOffCeilingMainLight();
        }
      },
      () => {
        this.pushToast({
          type: 'error',
          summary: 'Erfolg',
          message:
            'Es konnten nicht alle Lichter für Party eingestellt werden!',
        });
      }
    );
  }

  film() {
    this.selectAllCeilingLights();

    let $frontColor = this.frontLightService.setStaticColor('0', '0', '36');
    let $work = this.workLightService.setWorkLightColor('0', '0', '36');
    let $shelf = this.shelfLightService.setShelfLightColor('0', '0', '36');
    let $ceiling = this.ceilingLightService.sendRequest({
      mode: 'STATIC_COLOR',
      r: '1',
      g: '4',
      b: '48',
      kelvin: '',
      brightness: '19',
    });

    forkJoin([$frontColor, $work, $shelf, $ceiling]).subscribe(
      (results) => {
        if (results[3] === 'WARNING') {
          this.pushToast({
            type: 'warn',
            summary: 'Warnung',
            message:
              'Möglicherweise wurden nicht alle Deckenlichter angesprochen!',
          });
        } else {
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Die Lichter wurden für Film eingestellt.',
          });
          this.turnOffCeilingMainLight();
        }
      },
      () => {
        this.pushToast({
          type: 'error',
          summary: 'Erfolg',
          message: 'Es konnten nicht alle Lichter für Film eingestellt werden!',
        });
      }
    );
  }

  karl() {
    this.selectAllCeilingLights();

    let $frontColor = this.frontLightService.setStaticColor('173', '0', '121');
    let $work = this.workLightService.setWorkLightColor('173', '0', '121');
    let $shelf = this.shelfLightService.setShelfLightColor('173', '0', '121');
    let $ceiling = this.ceilingLightService.sendRequest({
      mode: 'STATIC_COLOR',
      r: '133',
      g: '1',
      b: '117',
      kelvin: '',
      brightness: '52',
    });

    forkJoin([$frontColor, $work, $shelf, $ceiling]).subscribe(
      (results) => {
        if (results[3] === 'WARNING') {
          this.pushToast({
            type: 'warn',
            summary: 'Warnung',
            message:
              'Möglicherweise wurden nicht alle Deckenlichter angesprochen!',
          });
        } else {
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Die Lichter wurden für Karl eingestellt.',
          });
          this.turnOffCeilingMainLight();
        }
      },
      () => {
        this.pushToast({
          type: 'error',
          summary: 'Erfolg',
          message: 'Es konnten nicht alle Lichter für Karl eingestellt werden!',
        });
      }
    );
  }

  bright() {
    this.selectAllCeilingLights();

    let $frontColor = this.frontLightService.setStaticColor('255', '255', '255');
    let $work = this.workLightService.setWorkLightColor('255', '255', '255');
    let $shelf = this.shelfLightService.setShelfLightColor('255', '255', '255');
    let $ceiling = this.ceilingLightService.sendRequest({
      mode: 'WHITE',
      r: '255',
      g: '255',
      b: '255',
      kelvin: '6500',
      brightness: '100',
    });

    forkJoin([$frontColor, $work, $shelf, $ceiling]).subscribe(
      (results) => {
        if (results[3] === 'WARNING') {
          this.pushToast({
            type: 'warn',
            summary: 'Warnung',
            message:
              'Möglicherweise wurden nicht alle Deckenlichter angesprochen!',
          });
        } else {
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Die Lichter wurden für Karl eingestellt.',
          });
          this.turnOffCeilingAmbientLight();
        }
      },
      () => {
        this.pushToast({
          type: 'error',
          summary: 'Erfolg',
          message: 'Es konnten nicht alle Lichter für Karl eingestellt werden!',
        });
      }
    );
  }

  turnOffCeilingMainLight() {
    this.ceilingLightService.checkBoxes.forEach((item) => {
      item.checked = false;
    });
    this.ceilingLightService.checkBoxes[8].checked = true;
    this.ceilingLightService
      .sendRequest({
        mode: 'WHITE',
        r: '',
        g: '',
        b: '',
        kelvin: '6500',
        brightness: '1',
      })
      .subscribe();
  }
  turnOffCeilingAmbientLight() {
    this.ceilingLightService.checkBoxes.forEach((item) => {
      item.checked = false;
    });
    this.ceilingLightService.checkBoxes[8].checked = true;
    this.ceilingLightService
      .sendRequest({
        mode: 'STATIC_COLOR',
        r: '1',
        g: '1',
        b: '1',
        kelvin: '6500',
        brightness: '1',
      })
      .subscribe();
  }

  pushToast(toast: Toast) {
    this.messageService.add({
      severity: toast.type,
      summary: toast.summary,
      detail: toast.message,
    });
  }

  selectAllCeilingLights() {
    this.ceilingLightService.checkBoxes.forEach((element) => {
      element.checked = true;
    });
  }
}
