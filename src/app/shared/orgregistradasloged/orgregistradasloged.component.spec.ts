import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgregistradaslogedComponent } from './orgregistradasloged.component';

describe('OrgregistradaslogedComponent', () => {
  let component: OrgregistradaslogedComponent;
  let fixture: ComponentFixture<OrgregistradaslogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgregistradaslogedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgregistradaslogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
