import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/shared-apps/tab-interface';
import { FrontLightService } from './front-light.service';

@Component({
  selector: 'app-front-light',
  templateUrl: './front-light.component.html',
  styleUrls: ['./front-light.component.less'],
})
export class FrontLightComponent implements OnInit {
  tabItems: Tab[];

  constructor(private frontLightService: FrontLightService) {}

  ngOnInit() {
    this.tabItems = [
      { label: 'Einfache Muster', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Statische Farbe', icon: 'pi pi-fw pi-pencil' },
      { label: 'Aufteilen', icon: 'pi pi-fw pi-percentage' },
    ];
  }
}
