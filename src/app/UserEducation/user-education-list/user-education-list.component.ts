import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-user-education-list',
  templateUrl: './user-education-list.component.html',
  styleUrls: ['./user-education-list.component.scss']
})

  export class UserEducationListComponent implements OnInit {
  
    UserEducationList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.UserEducationList=[]
     }
  
     Delete(UserEducationId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteUserEducation(UserEducationId).subscribe(result => {
        if (result == "Success") {
        this.UserEducationList = this.UserEducationList.filter(
          (item) => item.UserEducationId != UserEducationId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(UserEducationId): void{
      try {
        this.router.navigateByUrl("/UpdateUserEducation/" + UserEducationId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(UserEducationId): void{
      try {
        this.router.navigateByUrl("/Viewusereducation/" + UserEducationId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllUserEducation().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.UserEducationList.push(data);   
        }     
             console.log(this.UserEducationList);
      });
    }
  
  }
  



