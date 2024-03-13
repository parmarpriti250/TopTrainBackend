import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-forgot-password-otp',
  templateUrl: './forgot-password-otp.component.html',
  styleUrls: ['./forgot-password-otp.component.scss']
})
export class ForgotPasswordOTPComponent {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;

  AdminRegistrationId: any;
   adminregistrationId: AdminRegistration;
   Registrationlist: any[];
   showPassword: boolean;
   mainList: any[];
   searchText: any;
   otp1: any;
   otp2: any;
   otp3: any;
   otp4: any;
   otp5: any;
   otp6: any;

   constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: Service) {
    this.adminregistrationId = new AdminRegistration();
    this.Registrationlist = [];
    this.mainList=[]
   // this.Id =0

    this.route.params.subscribe((params) => {
      debugger
      
       this.AdminRegistrationId = params['AdminRegistrationId'];
     //  this.Id = JSON.parse(localStorage.getItem('SID'));
      console.log(" this.AdminRegistrationId",this.AdminRegistrationId)
    });
            
  }
  moveToNext(currentInput: any, nextInput: any): void {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  OnSubmit1(){
    debugger
  // this.AdminRegistration.OTPNo = this.otp;
  // this.generateOTP();
  this.Registrationlist=[]
  this.mainList=[]
   
  this.service.GetAdminRegistrationById(this.AdminRegistrationId).subscribe((result) => {
      
   this.adminregistrationId = result;
   if(this.adminregistrationId.OtpNo==this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6){
     alert("otp Matched")
     debugger;
     this.router.navigateByUrl("/reset-password/" + this.AdminRegistrationId);

    //  this.adminregistrationId.EmailStatus = "Active";
    //  this.service.UpdateRegistration(this.adminregistrationId).subscribe((result) => {
    //    if (result == 0) {
    //      alert('Not updated!');

    //    } else {
    //     alert("Email activate Succesfully")
        
    //      this.router.navigateByUrl("/ResetPassword/" + this.Id);

    //    }
    //  });


     
    //  this.router.navigateByUrl("/ResetPassword/" + this.Id);
   }else{
     alert("otp not Matched")
   }
  

 });

}


}