import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLightComponent } from './front-light.component';

describe('FrontLightComponent', () => {
  let component: FrontLightComponent;
  let fixture: ComponentFixture<FrontLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
