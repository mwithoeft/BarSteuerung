import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCeilingComponent } from './color-ceiling.component';

describe('ColorCeilingComponent', () => {
  let component: ColorCeilingComponent;
  let fixture: ComponentFixture<ColorCeilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCeilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
