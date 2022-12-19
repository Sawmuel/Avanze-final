import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasoliComponent } from './nuevasoli.component';

describe('NuevasoliComponent', () => {
  let component: NuevasoliComponent;
  let fixture: ComponentFixture<NuevasoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevasoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevasoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
