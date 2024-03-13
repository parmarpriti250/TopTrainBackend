import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-vendor-registration',
  templateUrl: './update-vendor-registration.component.html',
  styleUrls: ['./update-vendor-registration.component.scss']
})
 export class UpdateVendorRegistrationComponent implements OnInit {
  
    vendorregistration:VendorRegistration;
    // aboutlist  : any[];
    VendorRegistrationId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.vendorregistration = new VendorRegistration();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.VendorRegistrationId = params['VendorRegistrationId'];
    
          this.service.GetVendorRegistrationById(this.VendorRegistrationId).subscribe((result) => {
         
            this.vendorregistration = result;
            console.log(this.vendorregistration);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.vendorregistration);
              this.service.UpdateVendorRegistration(this.vendorregistration).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.vendorregistration.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.vendorregistration.Photo);
                  // this.service.SaveVendorRegistrationImage(formData,result).subscribe(data => {
                   
                    alert('Saved Successfully.');
                  // });         
               }
             
                
              });
            }
          
            // fileChangeEvent(fileInput: any){
            // this.filesToUpload = <Array<File>>fileInput.target.files;
            // this.selectedFileNames = [];
            // for (let i = 0; i < this.filesToUpload.length; i++)
            // {
            //     this.selectedFileNames.push(this.filesToUpload[i].name);
            //     this.vendorregistration.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }


