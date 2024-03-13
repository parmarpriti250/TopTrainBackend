import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {
  
    AchievementList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.AchievementList=[]
     }
  
     Delete(AchievementId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteAchievement(AchievementId).subscribe(result => {
        if (result == "Success") {
        this.AchievementList = this.AchievementList.filter(
          (item) => item.AchievementId != AchievementId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(AchievementId): void{
      try {
        this.router.navigateByUrl("/UpdateAchievement/" + AchievementId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(AchievementId): void{
      try {
        this.router.navigateByUrl("/Viewacheivement/" + AchievementId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllAchievement().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.AchievementList.push(data);   
        }     
             console.log(this.AchievementList);
      });
    }
  
  }
  

