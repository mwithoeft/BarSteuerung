import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Tab } from 'src/app/shared-apps/tab-interface';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { FrontLightService } from './front-light.service';

@Component({
  selector: 'app-front-light',
  templateUrl: './front-light.component.html',
  styleUrls: ['./front-light.component.less'],
})
export class FrontLightComponent implements OnInit {
  tabItems: Tab[];
  speed: number = 600050;

  constructor(
    private frontLightService: FrontLightService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.tabItems = [
      { label: 'Einfache Muster', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Statische Farbe', icon: 'pi pi-fw pi-pencil' },
      { label: 'Aufteilen', icon: 'pi pi-fw pi-percentage' },
    ];
  }

  turnOff() {
    this.frontLightService.requestWithoutParams('off').subscribe(
      () => {
        this.pushToast({
          type: 'success',
          summary: 'Erfolg',
          message: 'Frontlicht ausgeschaltet.',
        });
      },
      () =>
        this.pushToast({
          type: 'error',
          summary: 'Fehler',
          message: 'Frontlicht konnte nicht ausgeschaltet werden!',
        })
    );
  }

  setSpeed() {
    let calculatedSpeed = 1200000 - this.speed + 100;
    this.frontLightService.setSpeed(calculatedSpeed).subscribe(
      () => {
        this.pushToast({
          type: 'success',
          summary: 'Erfolg',
          message: 'Geschwindigkeit gesetzt.',
        });
      },
      () =>
        this.pushToast({
          type: 'error',
          summary: 'Fehler',
          message: 'Geschwindigkeit konnte nicht gesetzt werden!',
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
