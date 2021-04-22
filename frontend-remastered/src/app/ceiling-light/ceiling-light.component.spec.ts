import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingLightComponent } from './ceiling-light.component';

describe('CeilingLightComponent', () => {
  let component: CeilingLightComponent;
  let fixture: ComponentFixture<CeilingLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeilingLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeilingLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
