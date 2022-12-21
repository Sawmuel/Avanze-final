import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialComponent } from './credencial.component';

describe('CredencialComponent', () => {
  let component: CredencialComponent;
  let fixture: ComponentFixture<CredencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
