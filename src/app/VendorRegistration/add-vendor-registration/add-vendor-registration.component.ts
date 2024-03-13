import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorRegistration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-vendor-registration',
  templateUrl: './add-vendor-registration.component.html',
  styleUrls: ['./add-vendor-registration.component.scss']
})
  export class AddVendorRegistrationComponent implements OnInit{
    vendorregistration:VendorRegistration;
vendorregistrationlist  : any[];


constructor(private router: Router,
  private http: HttpClient,
  private service: Service) {

    this.vendorregistration = new VendorRegistration();
    this.vendorregistrationlist = [];

   }
   
   OnSubmit() {
    console.log("prop",this.vendorregistration);
   this.service.AddVendorRegistration(this.vendorregistration).subscribe((result) => {
     if (result > 0) {
     
        
         alert('Saved Successfully.');
          
     }
     else {
       alert("Something went wrong! Please try again.")
     }
   });
  
  }


ngOnInit(): void {
}

}

