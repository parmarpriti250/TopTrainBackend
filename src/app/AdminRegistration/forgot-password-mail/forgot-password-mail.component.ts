import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-forgot-password-mail',
  templateUrl: './forgot-password-mail.component.html',
  styleUrls: ['./forgot-password-mail.component.scss']
})

  export class ForgotPasswordMailComponent {
    adminregistrationlist: any[]
    mainlist: any[]
    mainlist1:any[]
    adminregistration: AdminRegistration;
    AdminRegistrationId:any
  
    constructor(private router: Router,
      private http: HttpClient,
      private service: Service) {
      this.adminregistration = new AdminRegistration();
      this.adminregistrationlist = []
      this.mainlist = []
      this.mainlist1=[]
     
    }
    OnSubmit() {
      this.adminregistrationlist = []
      this.service.GetAllAdminRegistration().subscribe((result) => {
        console.log(result);
        debugger
        for (let data of result) {
          this.adminregistrationlist.push(data);
        }
        console.log("adminregistration", this.adminregistrationlist); //Email
  
        this.mainlist = this.adminregistrationlist.filter(x => x.Email == this.adminregistration.Email);
        console.log("e1", this.mainlist);
  
        if (this.mainlist.length == 1) {
          alert('Email Id Existed');
          this.SendOTPEmail()
        }
  
        else {
          alert("Invalid Email Id");
  
        }
      });
  
    }
  
  
    SendOTPEmail() {
      this.adminregistrationlist = []
      this.mainlist = []
      this.mainlist1=[]
      this.service.SendOTPEmail(this.adminregistration.Email).subscribe({
  
        next: (response) => {
          alert("Email sent successfully")
  
          console.log('Email sent successfully:', response);
          //this.router.navigate(['otp']);
          this.adminregistration.OtpNo = response.otp;
          console.log('Received OTP:', this.adminregistration.OtpNo);
          //this.storeotp();
          this.service.GetAllAdminRegistration().subscribe((result) => {
            this.adminregistrationlist = result;
            this.mainlist1 = this.adminregistrationlist.filter(x => x.Email == this.adminregistration.Email);
  
            for (let data1 of this.mainlist1) {
              this.AdminRegistrationId = data1.AdminRegistrationId;
              // this.sendVerificationEmail(this.demo);
            }
            debugger
            this.service.GetAdminRegistrationById(this.AdminRegistrationId).subscribe((result) => {
              this.adminregistration = result;
              console.log("fun", this.adminregistration);
  
              // Invoke OnSubmit here
              //this.OnUpdate();
              this.adminregistration.OtpNo = response.otp;
              this.service.UpdateAdminRegistration(this.adminregistration).subscribe((result) => {
                if (result == 0) {
                  alert('Not updated!');
  
                } else {
                  alert('updated successfully');
                  this.router.navigateByUrl("/ForgotPasswordOTP/" + this.AdminRegistrationId);
  
                  
                }
              });
            });
          });
        }
      });
    }
  
  
  }