import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePatternComponent } from './simple-pattern.component';

describe('SimplePatternComponent', () => {
  let component: SimplePatternComponent;
  let fixture: ComponentFixture<SimplePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
