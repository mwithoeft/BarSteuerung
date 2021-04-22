import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLightComponent } from './work-light.component';

describe('WorkLightComponent', () => {
  let component: WorkLightComponent;
  let fixture: ComponentFixture<WorkLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
