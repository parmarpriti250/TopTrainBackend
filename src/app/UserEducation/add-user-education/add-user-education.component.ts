import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEducation } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-user-education',
  templateUrl: './add-user-education.component.html',
  styleUrls: ['./add-user-education.component.scss']
})

  export class AddUserEducationComponent implements OnInit{
    usereducation:UserEducation;
usereducationlist  : any[];


constructor(private router: Router,
  private http: HttpClient,
  private service: Service) {

    this.usereducation = new UserEducation();
    this.usereducationlist = [];

   }
   
   OnSubmit() {
    console.log("prop",this.usereducation);
   this.service.AddUserEducation(this.usereducation).subscribe((result) => {
     if (result > 0) {
     
        
         alert('Saved Successfully.');
          
     }
     else {
       alert("Something went wrong! Please try again.")
     }
   });
  
  }


ngOnInit(): void {
}

}








