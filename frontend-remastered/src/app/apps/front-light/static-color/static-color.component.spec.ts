import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticColorComponent } from './static-color.component';

describe('StaticColorComponent', () => {
  let component: StaticColorComponent;
  let fixture: ComponentFixture<StaticColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
