import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipallogedComponent } from './principalloged.component';

describe('PrincipallogedComponent', () => {
  let component: PrincipallogedComponent;
  let fixture: ComponentFixture<PrincipallogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipallogedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipallogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
