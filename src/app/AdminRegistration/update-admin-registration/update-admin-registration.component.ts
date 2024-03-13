import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-admin-registration',
  templateUrl: './update-admin-registration.component.html',
  styleUrls: ['./update-admin-registration.component.scss']
})

  export class UpdateAdminRegistrationComponent implements OnInit {
  
    adminregistration:AdminRegistration;
    // aboutlist  : any[];
    AdminRegistrationId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.adminregistration = new AdminRegistration();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.AdminRegistrationId = params['AdminRegistrationId'];
    
          this.service.GetAdminRegistrationById(this.AdminRegistrationId).subscribe((result) => {
         
            this.adminregistration = result;
            console.log(this.adminregistration);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.adminregistration);
              this.service.UpdateAdminRegistration(this.adminregistration).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.adminregistration.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.adminregistration.Photo);
                  // this.service.SaveAdminRegistrationImage(formData,result).subscribe(data => {
                   
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
            //     this.adminregistration.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }




