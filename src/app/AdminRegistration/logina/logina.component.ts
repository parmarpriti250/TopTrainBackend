import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegistration, Logina } from 'src/app/Class';
import { Service } from 'src/app/Service';
@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrls: ['./logina.component.scss']
})
export class LoginaComponent {
  loginArray:any={}
  logina: Logina;
  
  adminregistration: AdminRegistration;

  adminregistrationlist  : any[];
  isEdit: boolean = false;

 

  constructor(private formBuilder: FormBuilder, private router: Router, private service: Service , private http: HttpClient)
  {
  
  
      this.logina = new Logina();
      this.adminregistration = new AdminRegistration();
      this.adminregistrationlist = [];
     }
     
       


OnLogin(){
  alert ("Success")
  console.log(this.logina)

  this.service.Logina(this.logina.Email,this.logina.Password).subscribe((result) => {
    console.log(result);
    // debugger;
    localStorage.setItem('name', JSON.stringify(this.loginArray));
    if (result.loginArray == 0) {
      alert("Something went wrong! Please try again.");
      this.router.navigateByUrl('/login');
    } else {
      alert("Saved Successfully");
      
      this.router.navigateByUrl('/AddAchievement');
      
    }
  
    
  });
}
OnLogOut(){
 
  localStorage.removeItem('name');

}

}








