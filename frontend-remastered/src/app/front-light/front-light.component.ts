import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-front-light',
  templateUrl: './front-light.component.html',
  styleUrls: ['./front-light.component.less'],
})
export class FrontLightComponent implements OnInit {
  tabItems: MenuItem[];
  activeTabItem: MenuItem;

  constructor() {}

  ngOnInit() {
    this.tabItems = [
      { label: 'Einfache Muster', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Statische Farbe', icon: 'pi pi-fw pi-pencil' },
      { label: 'Aufteilen', icon: 'pi pi-fw pi-percentage' }
    ];
    this.activeTabItem = this.tabItems[0];
  }
}
