import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegistration, Logina} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-admin-registration',
  templateUrl: './add-admin-registration.component.html',
  styleUrls: ['./add-admin-registration.component.scss']
})

  export class AddAdminRegistrationComponent implements OnInit{
    adminregistration:AdminRegistration;
adminregistrationlist  : any[];
logina : Logina

constructor(private router: Router,
  private http: HttpClient,
  private service: Service) {

    this.adminregistration = new AdminRegistration();
    this.adminregistrationlist = [];

   }
   
   OnSubmit() {
    console.log("prop",this.adminregistration);
   this.service.AddAdminRegistration(this.adminregistration).subscribe((result) => {
    localStorage.setItem('SID', result.AdminRegistrationId);
     if (result > 0) {
     
        
         alert('Saved Successfully.');
          
     }
     else {
       alert("Something went wrong! Please try again.")
     }
   });
  
  }

  // OnSubmitt(){
  //   alert ("Success")
  //   console.log(this.logina)

  //   this.service.Logina(this.logina.Email,this.logina.Password).subscribe((result) => {
  //     console.log(result);
  //     // debugger;
  //     localStorage.setItem('SID', result.AdminRegistrationId);
  //     if (result.AdminRegistrationId == 0) {
  //       alert("Something went wrong! Please try again.");
  //       this.router.navigateByUrl('/logina');
  //     } else {
  //       alert("Saved Successfully");
        
  //       this.router.navigateByUrl('/homepage');
        
  //     }
    
      
  //   });
  // }


ngOnInit(): void {
}

}



