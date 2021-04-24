import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';

@Component({
  selector: 'app-color-ceiling',
  templateUrl: './color-ceiling.component.html',
  styleUrls: ['./color-ceiling.component.less']
})
export class ColorCeilingComponent implements OnInit {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
