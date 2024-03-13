import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-mail-verification-otp',
  templateUrl: './mail-verification-otp.component.html',
  styleUrls: ['./mail-verification-otp.component.scss']
})
export class MailVerificationOTPComponent {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;


  AdminRegistrationId: any;
   adminregistration: AdminRegistration;
   Registrationlist: any[];
   showPassword: boolean;
   mainList: any[];
   otp1: any;
   otp2: any;
   otp3: any;
   otp4: any;
   otp5: any;
   otp6: any;
   
   constructor(private renderer: Renderer2,private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: Service) {
    this.adminregistration = new AdminRegistration();
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
    console.log("this.otp1,this.otp2",this.otp1,this.otp2)
    
  // this.AdminRegistration.OTPNo = this.otp;
  // this.generateOTP();
  this.Registrationlist=[]
  this.mainList=[]
   
  this.service.GetAdminRegistrationById(this.AdminRegistrationId).subscribe((result) => {
      
   this.adminregistration = result;
   console.log("this.adminregistration.OTPNo",this.adminregistration.OtpNo)
   if(this.adminregistration.OtpNo==this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6){
     alert("otp Matched")


     this.adminregistration.EmailStatus = "Active";
     this.service.UpdateAdminRegistration(this.adminregistration).subscribe((result) => {
       if (result == 0) {
         alert('Not updated!');

       } else {
        alert("Email activate Succesfully")
        //  this.router.navigateByUrl("/VerifyEmail/" + this.Id);
         this.router.navigate(['LoginaComponent'])

         //  this.router.navigate(['otp']);
       }
     });


     
    //  this.router.navigateByUrl("/ResetPassword/" + this.Id);
   }else{
     alert("otp not Matched")
   }
  

 });

}

}

