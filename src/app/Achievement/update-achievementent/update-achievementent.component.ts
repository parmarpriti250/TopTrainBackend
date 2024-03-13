import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-achievementent',
  templateUrl: './update-achievementent.component.html',
  styleUrls: ['./update-achievementent.component.scss']
})
export class UpdateAchievementComponent implements OnInit {
  
    achievement:Achievement;
    // aboutlist  : any[];
    AchievementId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.achievement = new Achievement();
        // this.aboutlist = [];
    
        this.route.params.subscribe((params) => {
          this.AchievementId = params['AchievementId'];
    
          this.service.GetAchievementById(this.AchievementId).subscribe((result) => {
         
            this.achievement = result;
            console.log(this.achievement);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.achievement);
              this.service.UpdateAchievement(this.achievement).subscribe((result) => {
                console.log("hhh",result);
                if (result == 0) {
                  alert("Something went wrong! Please try again.");
                } 
                else
                 {
                  // const formData = new FormData();
                  // this.achievement.Photo = this.filesToUpload[0].name;
                  // formData.append('uploadedImage',this.filesToUpload[0],this.achievement.Photo);
                  // this.service.SaveAchievementImage(formData,result).subscribe(data => {
                   
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
            //     this.achievement.Photo = this.filesToUpload[i].name;
            // } 
            // }
    ngOnInit(): void {
    }
  
  }
