import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { PowerPlugService } from './power-plug.service';

@Component({
  selector: 'app-power-plugs',
  templateUrl: './power-plugs.component.html',
  styleUrls: ['./power-plugs.component.less'],
})
export class PowerPlugsComponent implements OnInit {
  buttons = {
    frontTvOn: true,
    frontTvOff: true,
    backTvOn: true,
    backTvOff: true,
  };

  constructor(
    private powerPlugService: PowerPlugService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.powerPlugService.status().subscribe(
      (result) => {
        result = result.trim();
        let lines = result.split('\n');
        this.changeTVFrontButton(lines[0] == '1');
        this.changeTVBackButton(lines[1] == '1');
      },
      () =>
        this.pushToast({
          type: 'error',
          summary: 'Fehler',
          message: 'Steckdosenstatus konnte nicht abgefragt werden!',
        })
    );
  }

  activateAll(activate: boolean) {
    if (activate) {
      this.powerPlugService.allOn().subscribe(
        () => {
          this.changeTVFrontButton(true);
          this.changeTVBackButton(true);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Steckdosen erfolgreich angeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'Steckdosen konnten nicht angeschaltet werden!',
          })
      );
    } else {
      this.powerPlugService.allOff().subscribe(
        () => {
          this.changeTVFrontButton(false);
          this.changeTVBackButton(false);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'Steckdosen erfolgreich ausgeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'Steckdosen konnten nicht ausgeschaltet werden!',
          })
      );
    }
  }

  activateFront(activate: boolean) {
    if (activate) {
      this.powerPlugService.frontOn().subscribe(
        () => {
          this.changeTVFrontButton(true);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'TV SUB erfolgreich angeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'TV SUB konnte nicht angeschaltet werden!',
          })
      );
    } else {
      this.powerPlugService.frontOff().subscribe(
        () => {
          this.changeTVFrontButton(false);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'TV SUB erfolgreich ausgeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'TV SUB konnte nicht ausgeschaltet werden!',
          })
      );
    }
  }
  activateBack(activate: boolean) {
    if (activate) {
      this.powerPlugService.backOn().subscribe(
        () => {
          this.changeTVBackButton(true);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'TV HINTEN erfolgreich angeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'TV HINTEN konnte nicht angeschaltet werden!',
          })
      );
    } else {
      this.powerPlugService.backOff().subscribe(
        () => {
          this.changeTVBackButton(false);
          this.pushToast({
            type: 'success',
            summary: 'Erfolg',
            message: 'TV HINTEN erfolgreich ausgeschaltet.',
          });
        },
        () =>
          this.pushToast({
            type: 'error',
            summary: 'Fehler',
            message: 'TV HINTEN konnte nicht ausgeschaltet werden!',
          })
      );
    }
  }

  pushToast(toast: Toast) {
    this.messageService.add({
      severity: toast.type,
      summary: toast.summary,
      detail: toast.message,
    });
  }

  changeTVFrontButton(active: boolean) {
    this.buttons.frontTvOn = !active;
    this.buttons.frontTvOff = active;
  }
  changeTVBackButton(active: boolean) {
    this.buttons.backTvOn = !active;
    this.buttons.backTvOff = active;
  }
}
