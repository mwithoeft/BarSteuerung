import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfLightComponent } from './shelf-light.component';

describe('ShelfLightComponent', () => {
  let component: ShelfLightComponent;
  let fixture: ComponentFixture<ShelfLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
