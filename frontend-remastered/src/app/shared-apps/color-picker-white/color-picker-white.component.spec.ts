import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerWhiteComponent } from './color-picker-white.component';

describe('ColorPickerWhiteComponent', () => {
  let component: ColorPickerWhiteComponent;
  let fixture: ComponentFixture<ColorPickerWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
