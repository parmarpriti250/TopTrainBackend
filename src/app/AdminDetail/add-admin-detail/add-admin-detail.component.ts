import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminDetail} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-admin-detail',
  templateUrl: './add-admin-detail.component.html',
  styleUrls: ['./add-admin-detail.component.scss']
})

  export class AddAdminDetailComponent implements OnInit{
    adminDetail:AdminDetail;
    admindetaillist:any[];
    
    uploadResult: any;
      filesToUpload: Array<File>;
      selectedFileNames: string[] = [];
      // Blog: any;
    
    constructor(
      private router:Router,
      private http:HttpClient,
      private service: Service){
        this.adminDetail = new AdminDetail();
      // this.student=new Student();
      this.admindetaillist=[];
    
      
    }
    OnSubmit() {
      console.log("admindetail",this.adminDetail);
     this.service.AddAdminDetail(this.adminDetail).subscribe((result) => {
       if (result > 0) {
        const formData= new FormData();
       
             this.adminDetail.Photo = this.filesToUpload[0].name;
             formData.append('uploadedPhoto',this.filesToUpload[0],this.adminDetail.Photo);
             this.service.SaveAdminDetailImage(formData,result).subscribe(data =>
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
          this.adminDetail.Photo = this.filesToUpload[i].name;
      } 
      }
    
    ngOnInit(): void {
    }
    
    }

