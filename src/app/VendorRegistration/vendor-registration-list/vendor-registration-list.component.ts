import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-vendor-registration-list',
  templateUrl: './vendor-registration-list.component.html',
  styleUrls: ['./vendor-registration-list.component.scss']
})
export class VendorRegistrationListComponent {
  VendorRegistrationList:any[];
  imgPath: string = Global.BASE_API_URL;
  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.VendorRegistrationList=[]
   }

   Delete(VendorRegistrationId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteVendorRegistration(VendorRegistrationId).subscribe(result => {
      if (result == "Success") {
      this.VendorRegistrationList = this.VendorRegistrationList.filter(
        (item) => item.VendorRegistrationId != VendorRegistrationId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(VendorRegistrationId): void{
    try {
      this.router.navigateByUrl("/UpdateVendorRegistration/" + VendorRegistrationId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(VendorRegistrationId): void{
    try {
      this.router.navigateByUrl("/Viewacheivement/" + VendorRegistrationId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllVendorRegistration().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.VendorRegistrationList.push(data);   
      }     
           console.log(this.VendorRegistrationList);
    });
  }

}




