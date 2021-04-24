import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteCeilingComponent } from './white-ceiling.component';

describe('WhiteCeilingComponent', () => {
  let component: WhiteCeilingComponent;
  let fixture: ComponentFixture<WhiteCeilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteCeilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteCeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
