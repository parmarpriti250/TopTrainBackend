import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEducation } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-user-education',
  templateUrl: './update-user-education.component.html',
  styleUrls: ['./update-user-education.component.scss']
})

  export class UpdateUserEducationComponent implements OnInit {
  
    usereducation:UserEducation;
    // aboutlist  : any[];
    UserEducationId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.usereducation = new UserEducation();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.UserEducationId = params['UserEducationId'];
    
          this.service.GetUserEducationById(this.UserEducationId).subscribe((result) => {
         
            this.usereducation = result;
            console.log(this.usereducation);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.usereducation);
              this.service.UpdateUserEducation(this.usereducation).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.usereducation.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.usereducation.Photo);
                  // this.service.SaveUserEducationImage(formData,result).subscribe(data => {
                   
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
            //     this.usereducation.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }


