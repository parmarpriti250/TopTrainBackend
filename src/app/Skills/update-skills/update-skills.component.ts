import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Class';
import { Service } from 'src/app/Service';
@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.scss']
})

  export class UpdateSkillsComponent implements OnInit {
  
    skills:Skills;
    // aboutlist  : any[];
    SkillsId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.skills = new Skills();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.SkillsId = params['SkillsId'];
    
          this.service.GetSkillsById(this.SkillsId).subscribe((result) => {
         
            this.skills = result;
            console.log(this.skills);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.skills);
              this.service.UpdateSkills(this.skills).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.skills.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.skills.Photo);
                  // this.service.SaveSkillsImage(formData,result).subscribe(data => {
                   
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
            //     this.skills.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }


