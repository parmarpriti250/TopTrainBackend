import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VendorDetail} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-vendor-detail',
  templateUrl: './add-vendor-detail.component.html',
  styleUrls: ['./add-vendor-detail.component.scss']
})

  export class AddVendorDetailComponent implements OnInit{
    vendorDetail:VendorDetail;
    vendordetaillist:any[];
    
    uploadResult: any;
      filesToUpload: Array<File>;
      selectedFileNames: string[] = [];
      // Blog: any;
    
    constructor(
      private router:Router,
      private http:HttpClient,
      private service: Service){
        this.vendorDetail = new VendorDetail();
      // this.student=new Student();
      this.vendordetaillist=[];
    
      
    }
    OnSubmit() {
      console.log("vendordetail",this.vendorDetail);
     this.service.AddVendorDetail(this.vendorDetail).subscribe((result) => {
       if (result > 0) {
        const formData= new FormData();
       
             this.vendorDetail.Photo = this.filesToUpload[0].name;
             formData.append('uploadedPhoto',this.filesToUpload[0],this.vendorDetail.Photo);
             this.service.SaveVendorDetailImage(formData,result).subscribe(data =>
              {
               
           alert('Saved Successfully.');
          }); 
            
       }
       else {
         alert("Something went wrong! Please try again.")
       }
     });
    
    }
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.selectedFileNames = [];
      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
          this.vendorDetail.Photo = this.filesToUpload[i].name;
      } 
      }
    
    ngOnInit(): void {
    }
    
    }



