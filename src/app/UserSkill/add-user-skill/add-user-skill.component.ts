import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSkill,Skills} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-user-skill',
  templateUrl: './add-user-skill.component.html',
  styleUrls: ['./add-user-skill.component.scss']
})

    export class AddUserSkillComponent implements OnInit {
      userskill:UserSkill;
      userskilllist  : any[];
      skills:Skills;
     skillsList:any[];
      constructor( private router: Router,
        private http: HttpClient,
        private service: Service) {
          this.userskill = new UserSkill();
          this.userskill.Skills = new Skills();
          this.userskilllist = [];
          this.skillsList = [];
          this.GetAllSkills();
         }
    
         OnSubmit() {
          console.log("prop",this.userskill);
         this.service.AddUserSkill(this.userskill).subscribe((result) => {
           if (result > 0) {
           
              
               alert('Saved Successfully.');
                
           }
           else {
             alert("Something went wrong! Please try again.")
           }
         });
        
        }
        GetAllSkills() {
          debugger;
          this.service.GetAllSkills().subscribe((result) => {
           console.log("es",result);
           for(let data of result){
               this.skillsList.push(data);   
           }     
                console.log("servicelist"+this.skillsList);
         });
       }
      ngOnInit(): void {
      }
    
    }







