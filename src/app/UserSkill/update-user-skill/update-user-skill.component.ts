import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSkill } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-user-skill',
  templateUrl: './update-user-skill.component.html',
  styleUrls: ['./update-user-skill.component.scss']
})

  export class UpdateUserSkillComponent implements OnInit {
  
    userskill:UserSkill;
    // aboutlist  : any[];
    UserSkillId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.userskill = new UserSkill();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.UserSkillId = params['UserSkillId'];
    
          this.service.GetUserSkillById(this.UserSkillId).subscribe((result) => {
         
            this.userskill = result;
            console.log(this.userskill);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.userskill);
              this.service.UpdateUserSkill(this.userskill).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.userskill.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.userskill.Photo);
                  // this.service.SaveUserSkillImage(formData,result).subscribe(data => {
                   
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
            //     this.userskill.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }

