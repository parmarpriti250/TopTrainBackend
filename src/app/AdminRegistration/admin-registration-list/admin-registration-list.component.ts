import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-admin-registration-list',
  templateUrl: './admin-registration-list.component.html',
  styleUrls: ['./admin-registration-list.component.scss']
})

  export class AdminRegistrationListComponent {
    AdminRegistrationList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.AdminRegistrationList=[]
     }
  
     Delete(AdminRegistrationId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteAdminRegistration(AdminRegistrationId).subscribe(result => {
        if (result == "Success") {
        this.AdminRegistrationList = this.AdminRegistrationList.filter(
          (item) => item.AdminRegistrationId != AdminRegistrationId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(AdminRegistrationId): void{
      try {
        this.router.navigateByUrl("/UpdateAdminRegistration/" + AdminRegistrationId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(AdminRegistrationId): void{
      try {
        this.router.navigateByUrl("/Viewacheivement/" + AdminRegistrationId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllAdminRegistration().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.AdminRegistrationList.push(data);   
        }     
             console.log(this.AdminRegistrationList);
      });
    }
  
  }
  
  
  
  
  

