import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePatternFrontComponent } from './simple-pattern-front.component';

describe('SimplePatternComponent', () => {
  let component: SimplePatternFrontComponent;
  let fixture: ComponentFixture<SimplePatternFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePatternFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePatternFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
