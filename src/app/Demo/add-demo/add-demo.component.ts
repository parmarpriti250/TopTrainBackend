import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Demo} from 'src/app/Class';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.scss']
})

  export class AddDemoComponent implements OnInit{
    demo:Demo;
    demolist:any[];
    
    uploadResult: any;
      filesToUpload: Array<File>;
      selectedFileNames: string[] = [];
  selectedFile: any;
  files: any;
  name: any;
      // Blog: any;
    
    constructor(
      private router:Router,
      private http:HttpClient,
      private service: Service){
        this.demo = new Demo();
      // this.student=new Student();
      this.demolist=[];
    
      
    }
    
    
     
    OnSubmit() {
      console.log("demo", this.demo);
    
      this.service.AddDemo(this.demo).subscribe((result) => {
        if (result > 0) {
          const imageFormData = new FormData();
          this.demo.Photo = this.filesToUpload[result].name;
          imageFormData.append('uploadedPhoto', this.filesToUpload[result], this.demo.Photo);
          
          this.service.SaveDemoImage(imageFormData, result).subscribe(data => {
            alert('Image Saved Successfully.');
          });
        } else if (result > 1) {
          const pdfFormData = new FormData();
          this.demo.PDF = this.filesToUpload[result].name;
          pdfFormData.append('uploadedPDF', this.filesToUpload[result], this.demo.PDF);
          
          this.service.SaveDemoPDF(pdfFormData, result).subscribe(data => {
            alert('PDF Saved Successfully.');
          });
        }
      
      });
    
    }
    
    fileChangeEventforphoto(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.selectedFileNames = [];
    
      for (let result = 0; result < this.filesToUpload.length; result++) {
        this.selectedFileNames.push(this.filesToUpload[result].name);
        this.demo.Photo = this.filesToUpload[result].name;
        alert("in photo")
  

      }
    }
    
    fileChangeEventforPDF(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  this.selectedFileNames = [];

  for (let result = 0; result < this.filesToUpload.length; result++) {
    this.selectedFileNames.push(this.filesToUpload[result].name);
    this.demo.PDF = this.filesToUpload[result].name;  
    alert("in pdf")
  
  }
}

    ngOnInit(): void {
    }
    
    }


