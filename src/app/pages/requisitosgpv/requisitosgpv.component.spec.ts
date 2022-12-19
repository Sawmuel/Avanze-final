import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosgpvComponent } from './requisitosgpv.component';

describe('RequisitosgpvComponent', () => {
  let component: RequisitosgpvComponent;
  let fixture: ComponentFixture<RequisitosgpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosgpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosgpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
