import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePatternCeilingComponent } from './simple-pattern-ceiling.component';

describe('SimplePatternCeilingComponent', () => {
  let component: SimplePatternCeilingComponent;
  let fixture: ComponentFixture<SimplePatternCeilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePatternCeilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePatternCeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
