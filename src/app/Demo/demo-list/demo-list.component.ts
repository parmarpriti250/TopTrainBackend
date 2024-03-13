import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/Global';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})

  export class DemoListComponent implements OnInit {
  
    DemoList:any[];
    imgPath: string = Global.BASE_API_URL;
    constructor(private router: Router,  private http: HttpClient, private service: Service) {
      this.DemoList=[]
     }
  
     Delete(DemoId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteDemo(DemoId).subscribe(result => {
        if (result == "Success") {
        this.DemoList = this.DemoList.filter(
          (item) => item.DemoId != DemoId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    Edit(DemoId): void{
      try {
        this.router.navigateByUrl("/UpdateDemo/" + DemoId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    View(DemoId): void{
      try {
        this.router.navigateByUrl("/ViewDemo/" + DemoId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
    ngOnInit(): void {
      this.service.GetAllDemo().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.DemoList.push(data);   
        }     
             console.log(this.DemoList);
      });
    }
  
  }
  





