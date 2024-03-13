import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail } from 'src/app/Class';
import { Service } from 'src/app/Service';
@Component({
  selector: 'app-update-user-detail',
  templateUrl: './update-user-detail.component.html',
  styleUrls: ['./update-user-detail.component.scss']
})

  export class UpdateUserDetailComponent implements OnInit {
    userdetail:UserDetail;
    // aboutlist  : any[];
    UserDetailId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.userdetail = new UserDetail();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.UserDetailId = params['UserDetailId'];
    
          this.service.GetUserDetailById(this.UserDetailId).subscribe((result) => {
         
            this.userdetail = result;
            console.log(this.userdetail);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.userdetail);
              this.service.UpdateUserDetail(this.userdetail).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } else {
                  const formData = new FormData();
                  this.userdetail.Photo = this.filesToUpload[0].name;
                  formData.append('uploadedImage',this.filesToUpload[0],this.userdetail.Photo);
                  this.service.SaveUserDetailImage(formData,result).subscribe(data => {
                   
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
                this.userdetail.Photo = this.filesToUpload[i].name;
            } 
            }
  
    ngOnInit(): void {
    }
  
  }