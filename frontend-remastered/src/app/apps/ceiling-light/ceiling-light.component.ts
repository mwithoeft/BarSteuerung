import { Component, OnInit } from '@angular/core';
import { CeilingLightService } from './ceiling-light.service';

interface CheckBoxes {
  name: string;
  index: number;
  checked: boolean;
}

@Component({
  selector: 'app-ceiling-light',
  templateUrl: './ceiling-light.component.html',
  styleUrls: ['./ceiling-light.component.less'],
})
export class CeilingLightComponent implements OnInit {
  checkBoxes: CheckBoxes[] = [
    { name: 'Bar 1', index: 0, checked: false },
    { name: 'Bar 2', index: 1, checked: false },
    { name: 'Bar 3', index: 2, checked: false },
    { name: 'Bar 4', index: 3, checked: false },
    { name: 'Bar 5', index: 4, checked: false },
    { name: 'Bar 6', index: 5, checked: false },
    { name: 'Gang 1', index: 6, checked: false },
    { name: 'Gang 2', index: 7, checked: false },
    { name: 'Billiardlicht', index: 8, checked: false },
  ];

  constructor(private ceilingLightService: CeilingLightService) {}

  ngOnInit(): void {}

  selectAll(selectAll: boolean) {
    this.checkBoxes.forEach((checkbox) => {
      checkbox.checked = selectAll;
    });
  }
}
