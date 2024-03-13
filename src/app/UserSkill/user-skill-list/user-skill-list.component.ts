import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-user-skill-list',
  templateUrl: './user-skill-list.component.html',
  styleUrls: ['./user-skill-list.component.scss']
})

  export class UserSkillListComponent {
    UserSkillList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.UserSkillList=[]
     }
  
     Delete(UserSkillId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteUserSkill(UserSkillId).subscribe(result => {
        if (result == "Success") {
        this.UserSkillList = this.UserSkillList.filter(
          (item) => item.UserSkillId != UserSkillId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(UserSkillId): void{
      try {
        this.router.navigateByUrl("/UpdateUserSkill/" + UserSkillId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(UserSkillId): void{
      try {
        this.router.navigateByUrl("/ViewUserSkill/" + UserSkillId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllUserSkill().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.UserSkillList.push(data);   
        }     
             console.log(this.UserSkillList);
      });
    }
  
  }
  
 