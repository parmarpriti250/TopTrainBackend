import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demo } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-demo',
  templateUrl: './update-demo.component.html',
  styleUrls: ['./update-demo.component.scss']
})

  export class UpdateDemoComponent implements OnInit {
    demo:Demo;
    demolist  : any[];
    DemoId: any;
    uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    constructor(private route: ActivatedRoute,private router: Router,
      private http: HttpClient,
      private service: Service) {
        this.demo = new Demo();
        this.demolist = [];
    
        this.route.params.subscribe((params) => {
          this.DemoId = params['DemoId'];
    
          this.service.GetDemoById(this.DemoId).subscribe((result) => {
         
            this.demo = result;
            console.log(this.demo);
    
          });
        });
       }
  
       OnSubmit(){
        debugger;
              console.log(this.demo);
              this.service.UpdateDemo(this.demo).subscribe((result) => {
                // console.log("hhh",result);
               
                
                if (result > 0) {
                  const formData = new FormData();
                  this.demo.Photo = this.filesToUpload[0].name;
                  formData.append('uploadedPhoto', this.filesToUpload[0], this.demo.Photo);
                  this.service.SaveDemoImage(formData, result).subscribe(data => {
                    alert('Image Saved Successfully.');
                  });
                }
                else {
                  alert("Something went wrong! Please try again.")
                }
                 if (result > 0) {
                  const formData = new FormData();
                  this.demo.PDF = this.filesToUpload[0].name;
                  formData.append('uploadedPDF', this.filesToUpload[0], this.demo.PDF);
                  this.service.SaveDemoPDF(formData, result).subscribe(data => {
                    alert('PDF Saved Successfully.');
                  });
                }
                 else {
                  alert("Something went wrong! Please try again.")
                }
              } 
            );
          }
          
          
          fileChangeEvent(fileInput: any){
            this.filesToUpload = <Array<File>>fileInput.target.files;
            this.selectedFileNames = [];
            for (let i = 0; i < this.filesToUpload.length; i++)
            {
                this.selectedFileNames.push(this.filesToUpload[i].name);
                this.demo.Photo = this.filesToUpload[i].name;
            } 
            }
          
            fileChangeEventt(fileInput: any){
              this.filesToUpload = <Array<File>>fileInput.target.files;
              this.selectedFileNames = [];
              for (let i = 0; i < this.filesToUpload.length; i++)
              {
                  this.selectedFileNames.push(this.filesToUpload[i].name);
                  this.demo.PDF = this.filesToUpload[i].name;
              } 
              }
          ngOnInit(): void {
          }
          
          }

