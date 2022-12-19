import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlogedComponent } from './navbarloged.component';

describe('NavbarlogedComponent', () => {
  let component: NavbarlogedComponent;
  let fixture: ComponentFixture<NavbarlogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlogedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarlogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
