import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDetail} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss']
})

  export class AddUserDetailComponent implements OnInit{
    userdetail:UserDetail;
    userdetaillist:any[];
    
    uploadResult: any;
      filesToUpload: Array<File>;
      selectedFileNames: string[] = [];
      // Blog: any;
    
    constructor(
      private router:Router,
      private http:HttpClient,
      private service: Service){
        this.userdetail = new UserDetail();
      // this.student=new Student();
      this.userdetaillist=[];
    
      
    }
    OnSubmit() {
      console.log("userdetail",this.userdetail);
     this.service.AddUserDetail(this.userdetail).subscribe((result) => {
       if (result > 0) {
        const formData= new FormData();
       
             this.userdetail.Photo = this.filesToUpload[0].name;
             formData.append('uploadedPhoto',this.filesToUpload[0],this.userdetail.Photo);
             this.service.SaveUserDetailImage(formData,result).subscribe(data =>
              {
               
           alert('Saved Successfully.');
          }); 
            
       }
       else {
         alert("Something went wrong! Please try again.")
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

