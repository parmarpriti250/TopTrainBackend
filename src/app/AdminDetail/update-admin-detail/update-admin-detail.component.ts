import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDetail } from 'src/app/Class';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-admin-detail',
  templateUrl: './update-admin-detail.component.html',
  styleUrls: ['./update-admin-detail.component.scss']
})

  export class UpdateAdminDetailComponent implements OnInit {
    admindetail:AdminDetail;
    // aboutlist  : any[];
    AdminDetailId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.admindetail = new AdminDetail();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.AdminDetailId = params['AdminDetailId'];
    
          this.service.GetAdminDetailById(this.AdminDetailId).subscribe((result) => {
         
            this.admindetail = result;
            console.log("admindetail",this.admindetail);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.admindetail);
              this.service.UpdateAdminDetail(this.admindetail).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } else {
                  const formData = new FormData();
                  this.admindetail.Photo = this.filesToUpload[0].name;
                  formData.append('uploadedImage',this.filesToUpload[0],this.admindetail.Photo);
                  this.service.SaveAdminDetailImage(formData,result).subscribe(data => {
                   
                    alert('Saved Successfully.');
                  });         
               }            
              });
            }
          
            fileChangeEvent(fileInput: any){
            this.filesToUpload = <Array<File>>fileInput.target.files;
            this.selectedFileNames = [];
            for (let i = 0; i < this.filesToUpload.length; i++)
            {
                this.selectedFileNames.push(this.filesToUpload[i].name);
                this.admindetail.Photo = this.filesToUpload[i].name;
            } 
            }
  
    ngOnInit(): void {
    }
  
  }



