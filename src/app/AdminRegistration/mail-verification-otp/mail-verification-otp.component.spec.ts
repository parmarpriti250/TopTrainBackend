import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailVerificationOTPComponent } from './mail-verification-otp.component';

describe('MailVerificationOTPComponent', () => {
  let component: MailVerificationOTPComponent;
  let fixture: ComponentFixture<MailVerificationOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailVerificationOTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailVerificationOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
