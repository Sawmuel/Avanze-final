import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarprinComponent } from './navbarprin.component';

describe('NavbarprinComponent', () => {
  let component: NavbarprinComponent;
  let fixture: ComponentFixture<NavbarprinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarprinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
