import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.scss']
})

  export class AddSkillsComponent implements OnInit{
    skills:Skills;
skillslist  : any[];


constructor(private router: Router,
  private http: HttpClient,
  private service: Service) {

    this.skills = new Skills();
    this.skillslist = [];

   }
   
   OnSubmit() {
    console.log("prop",this.skills);
   this.service.AddSkills(this.skills).subscribe((result) => {
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

