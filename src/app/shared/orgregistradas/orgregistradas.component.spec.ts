import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgregistradasComponent } from './orgregistradas.component';

describe('OrgregistradasComponent', () => {
  let component: OrgregistradasComponent;
  let fixture: ComponentFixture<OrgregistradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgregistradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgregistradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
