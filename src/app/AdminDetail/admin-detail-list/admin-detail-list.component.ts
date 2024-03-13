import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-admin-detail-list',
  templateUrl: './admin-detail-list.component.html',
  styleUrls: ['./admin-detail-list.component.scss']
})

  export class AdminDetailListComponent implements OnInit {
  
    AdminDetailList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.AdminDetailList=[]
     }
  
     Delete(AdminDetailId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteAdminDetail(AdminDetailId).subscribe(result => {
        if (result == "Success") {
        this.AdminDetailList = this.AdminDetailList.filter(
          (item) => item.AdminDetailId != AdminDetailId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(AdminDetailId): void{
      try {
        this.router.navigateByUrl("/UpdateAdminDetail/" + AdminDetailId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(AdminDetailId): void{
      try {
        this.router.navigateByUrl("/ViewAdminDetail/" + AdminDetailId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllAdminDetail().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.AdminDetailList.push(data);   
        }     
             console.log(this.AdminDetailList);
      });
    }
  
  }
  







