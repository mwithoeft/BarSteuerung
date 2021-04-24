import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Tab } from 'src/app/shared-apps/tab-interface';
import { Toast } from 'src/app/shared-apps/toast-interface';
import { CeilingLightService } from './ceiling-light.service';

@Component({
  selector: 'app-ceiling-light',
  templateUrl: './ceiling-light.component.html',
  styleUrls: ['./ceiling-light.component.less'],
})
export class CeilingLightComponent implements OnInit {
  tabItems: Tab[];

  constructor(
    private messageService: MessageService,
    public ceilingLightService: CeilingLightService
  ) {}

  ngOnInit(): void {
    this.tabItems = [
      { label: 'Einfache Muster', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Weiß', icon: 'pi pi-fw pi-flag' },
      { label: 'Farbe', icon: 'pi pi-fw pi-microsoft' },
    ];
  }

  selectAll(selectAll: boolean) {
    this.ceilingLightService.checkBoxes.forEach((checkbox) => {
      checkbox.checked = selectAll;
    });
  }

  pushToast(toast: Toast) {
    this.messageService.add({
      severity: toast.type,
      summary: toast.summary,
      detail: toast.message,
    });
  }
}
