import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlugsComponent } from './power-plugs.component';

describe('PowerPlugsComponent', () => {
  let component: PowerPlugsComponent;
  let fixture: ComponentFixture<PowerPlugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerPlugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
