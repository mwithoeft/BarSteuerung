import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/shared-apps/toast-interface';

@Component({
  selector: 'app-white-ceiling',
  templateUrl: './white-ceiling.component.html',
  styleUrls: ['./white-ceiling.component.less']
})
export class WhiteCeilingComponent implements OnInit {
  @Output() emitToast: EventEmitter<Toast> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
