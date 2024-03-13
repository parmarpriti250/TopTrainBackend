import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordOTPComponent } from './forgot-password-otp.component';

describe('ForgotPasswordOTPComponent', () => {
  let component: ForgotPasswordOTPComponent;
  let fixture: ComponentFixture<ForgotPasswordOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordOTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
