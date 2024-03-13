import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-vendor-detail-list',
  templateUrl: './vendor-detail-list.component.html',
  styleUrls: ['./vendor-detail-list.component.scss']
})

  export class VendorDetailListComponent implements OnInit {
  
    VendorDetailList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.VendorDetailList=[]
     }
  
     Delete(VendorDetailId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteVendorDetail(VendorDetailId).subscribe(result => {
        if (result == "Success") {
        this.VendorDetailList = this.VendorDetailList.filter(
          (item) => item.VendorDetailId != VendorDetailId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(VendorDetailId): void{
      try {
        this.router.navigateByUrl("/UpdateVendorDetail/" + VendorDetailId,);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(VendorDetailId): void{
      try {
        this.router.navigateByUrl("/ViewVendorDetail/" + VendorDetailId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllVendorDetail().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.VendorDetailList.push(data);   
        }     
             console.log(this.VendorDetailList);
      });
    }
  
  }
  





