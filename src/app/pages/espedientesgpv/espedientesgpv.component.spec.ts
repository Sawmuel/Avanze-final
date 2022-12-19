import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspedientesgpvComponent } from './espedientesgpv.component';

describe('EspedientesgpvComponent', () => {
  let component: EspedientesgpvComponent;
  let fixture: ComponentFixture<EspedientesgpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspedientesgpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspedientesgpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
