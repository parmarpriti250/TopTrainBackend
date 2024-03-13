import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorDetail } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-vendor-detail',
  templateUrl: './update-vendor-detail.component.html',
  styleUrls: ['./update-vendor-detail.component.scss']
})

  export class UpdateVendorDetailComponent implements OnInit {
    vendordetail:VendorDetail;
    // aboutlist  : any[];
    VendorDetailId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.vendordetail = new VendorDetail();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.VendorDetailId = params['VendorDetailId'];
    
          this.service.GetVendorDetailById(this.VendorDetailId).subscribe((result) => {
         
            this.vendordetail = result;
            console.log("VendorDetailId",this.vendordetail);
    
          });
        });
       }
  
       OnSubmit(){
       
              console.log(this.vendordetail);
              this.service.UpdateVendorDetail(this.vendordetail).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                debugger; 
                 {
                  const formData = new FormData();
                  this.vendordetail.Photo = this.filesToUpload[0].name;
                  formData.append('uploadedImage',this.filesToUpload[0],this.vendordetail.Photo);
                  this.service.SaveVendorDetailImage(formData,result).subscribe(data => {
                   
                 
                  });    
                  alert('Saved Successfully.');     
               }
             
                
              });
            }
          
            fileChangeEvent(fileInput: any){
            this.filesToUpload = <Array<File>>fileInput.target.files;
            this.selectedFileNames = [];
            for (let i = 0; i < this.filesToUpload.length; i++)
            {
                this.selectedFileNames.push(this.filesToUpload[i].name);
                this.vendordetail.Photo = this.filesToUpload[i].name;
            } 
            }
    ngOnInit(): void {
    }
  
  }