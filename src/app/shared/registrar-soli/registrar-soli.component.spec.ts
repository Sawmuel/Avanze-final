import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarSoliComponent } from './registrar-soli.component';

describe('RegistrarSoliComponent', () => {
  let component: RegistrarSoliComponent;
  let fixture: ComponentFixture<RegistrarSoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
