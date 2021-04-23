import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitColorComponent } from './split-color.component';

describe('SplitColorComponent', () => {
  let component: SplitColorComponent;
  let fixture: ComponentFixture<SplitColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
