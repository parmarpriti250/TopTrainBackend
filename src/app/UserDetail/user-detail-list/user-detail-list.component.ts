import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.scss']
})

  export class UserDetailListComponent implements OnInit {
  
    UserDetailList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.UserDetailList=[]
     }
  
     Delete(UserDetailId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteUserDetail(UserDetailId).subscribe(result => {
        if (result == "Success") {
        this.UserDetailList = this.UserDetailList.filter(
          (item) => item.UserDetailId != UserDetailId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(UserDetailId): void{
      try {
        this.router.navigateByUrl("/UpdateUserDetail/" + UserDetailId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(UserDetailId): void{
      try {
        this.router.navigateByUrl("/ViewUserDetail/" + UserDetailId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllUserDetail().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.UserDetailList.push(data);   
        }     
             console.log(this.UserDetailList);
      });
    }
  
  }
  



