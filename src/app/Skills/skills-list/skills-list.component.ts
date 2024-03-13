import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';
@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})

  export class SkillsListComponent implements OnInit {
  
    SkillsList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.SkillsList=[]
     }
  
     Delete(SkillsId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteSkills(SkillsId).subscribe(result => {
        if (result == "Success") {
        this.SkillsList = this.SkillsList.filter(
          (item) => item.SkillsId != SkillsId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(SkillsId): void{
      try {
        this.router.navigateByUrl("/UpdateSkills/" + SkillsId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(SkillsId): void{
      try {
        this.router.navigateByUrl("/ViewSkills/" + SkillsId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllSkills().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.SkillsList.push(data);   
        }     
             console.log(this.SkillsList);
      });
    }
  
  }
  


