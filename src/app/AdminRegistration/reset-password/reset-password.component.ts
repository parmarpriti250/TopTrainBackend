import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  adminregistration: AdminRegistration;

  mainList: any;
  demo: any;
  AdminRegistrationId: any;
  confirmPassword: any
  newPassword:any


  constructor(private router: Router, private http: HttpClient,
    private service: Service, private route: ActivatedRoute,) {

    this.adminregistration = new AdminRegistration();

    this.mainList = [];
    this.demo = 0;
    // this.confirmPassword = ""

    this.route.params.subscribe((params) => {
      debugger
      this.AdminRegistrationId = params['AdminRegistrationId'];
      console.log("addclient", this.AdminRegistrationId)

      this.service.GetAdminRegistrationById(this.AdminRegistrationId).subscribe((result) => {
        this.adminregistration = result;
        console.log("this.adminregistration", this.adminregistration);

      });
      
        
    });

  }

  OnSubmit() {
    console.log(this.newPassword, "this.newPassword")
    console.log(this.confirmPassword, "this.confirmPassword")
    if (this.newPassword == this.confirmPassword) {
      console.log("final", this.adminregistration)
      this.adminregistration.Password=this.newPassword
      this.service.UpdateAdminRegistration(this.adminregistration).subscribe((result) => {
        console.log("hhh", result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Saved Successfully.');
          this.router.navigate(['/Logina/']);
        }
      });
    } else {
      alert("password not match")
    }

  }


}