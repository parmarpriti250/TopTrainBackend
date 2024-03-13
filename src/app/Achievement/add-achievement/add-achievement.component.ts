import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-achievement',
  templateUrl: './add-achievement.component.html',
  styleUrls: ['./add-achievement.component.scss']
})

  export class AddAchievementComponent implements OnInit{
        achievement:Achievement;
    achievementlist  : any[];
  
  
    constructor(private router: Router,
      private http: HttpClient,
      private service: Service) {
  
        this.achievement = new Achievement();
        this.achievementlist = [];
  
       }
       
       OnSubmit() {
        console.log("prop",this.achievement);
       this.service.AddAchievement(this.achievement).subscribe((result) => {
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
  
  
  
  
  
  
 