import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Achievement, AdminDetail, AdminRegistration, Demo, Logina, Loginv, Skills, UserDetail, UserEducation, UserSkill, VendorDetail } from 'src/app/Class';
import { Global } from 'src/app/Global';
import { VendorRegistration } from 'src/app/Class';

@Injectable({
  providedIn: 'root'
})


export class Service {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
      "Content-Security-Policy": 'upgrade-insecure-requests'
    })
  };

  IsLogin: any;
  constructor(private http: HttpClient) {
    this.IsLogin = false;
   }



   AddAchievement(Achievement): Observable<any> {
    return this.http.post<Achievement>(Global.SERVICE_API_URL+"Achievement/AddAchievement",Achievement, this.httpOptions);
  } 
  GetAllAchievement() {
    return this.http.get<any>( Global.SERVICE_API_URL +"Achievement/GetAllAchievement", this.httpOptions);
  }
  DeleteAchievement(AchievementId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"Achievement/DeleteAchievement?AchievementId="+AchievementId,this.httpOptions);
  }
  GetAchievementById(AchievementId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"Achievement/GetAchievementById?AchievementId="+AchievementId,this.httpOptions);
  }
  UpdateAchievement(Achievement): Observable<any> {
    return this.http.post<Achievement>( Global.SERVICE_API_URL +"Achievement/UpdateAchievement?", Achievement, this.httpOptions);
  } 
  // SaveAchievementImage(formdata,Id): Observable<any> {
  //   const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"Achievement/SaveAchievementImage?Id="+Id, formdata, null );
  //   return this.http.request(uploadReq);
  // }


  AddVendorRegistration(VendorRegistration): Observable<any> {
    return this.http.post<VendorRegistration>(Global.SERVICE_API_URL+"VendorRegistration/AddVendorRegistration",VendorRegistration, this.httpOptions);
  } 
  GetAllVendorRegistration() {
    return this.http.get<any>( Global.SERVICE_API_URL +"VendorRegistration/GetAllVendorRegistration", this.httpOptions);
  }
  DeleteVendorRegistration(VendorRegistrationId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"VendorRegistration/DeleteVendorRegistration?VendorRegistrationId="+VendorRegistrationId,this.httpOptions);
  }
  GetVendorRegistrationById(VendorRegistrationId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"VendorRegistration/GetVendorRegistrationById?VendorRegistrationId=" +VendorRegistrationId, this.httpOptions);
  }
  UpdateVendorRegistration(VendorRegistrationId): Observable<any> {
    return this.http.post<VendorRegistration>( Global.SERVICE_API_URL +"VendorRegistration/UpdateVendorRegistration", VendorRegistrationId, this.httpOptions);
  } 
  Loginv(Email,Password): Observable<any> {
    return this.http.get<Loginv>( Global.SERVICE_API_URL +"VendorRegistration/Login?Email="+Email+"&Password="+Password);
  }
  
                                                   

  AddAdminRegistration(AdminRegistration): Observable<any> {
    return this.http.post<AdminRegistration>( Global.SERVICE_API_URL +"AdminRegistration/AddAdminRegistration", AdminRegistration, this.httpOptions);
  } 
  GetAllAdminRegistration() {
    return this.http.get<any>( Global.SERVICE_API_URL +"AdminRegistration/GetAllAdminRegistration", this.httpOptions);
  }
  DeleteAdminRegistration(AdminRegistrationId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"AdminRegistration/DeleteAdminRegistration?AdminRegistrationId="+AdminRegistrationId,this.httpOptions);
  }
  
  GetAdminRegistrationById(AdminRegistrationId): Observable<any> {
    debugger;
    return this.http.get<any>( Global.SERVICE_API_URL +"AdminRegistration/GetAdminRegistrationById?AdminRegistrationId="+AdminRegistrationId,this.httpOptions);
  }
  UpdateAdminRegistration(AdminRegistration): Observable<any> {
    return this.http.post<AdminRegistration>( Global.SERVICE_API_URL +"AdminRegistration/UpdateAdminRegistration", AdminRegistration, this.httpOptions);
  } 
  Logina(Email,Password): Observable<any> {
    return this.http.get<Logina>( Global.SERVICE_API_URL +"AdminRegistration/Logina?Email="+Email+"&Password="+Password);

  }      
  SendOTPEmail(Email){
    return this.http.post<any>(Global.SERVICE_API_URL +"AdminRegistration/SendOTPEmail?Email="+Email,this.httpOptions);
      }            









  AddUserSkill(UserSkill): Observable<any> {
    return this.http.post<UserSkill>( Global.SERVICE_API_URL +"UserSkill/AddUserSkill", UserSkill, this.httpOptions);
  } 
  GetAllUserSkill() {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserSkill/GetAllUserSkill", this.httpOptions);
  }
  DeleteUserSkill(UserSkillId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"UserSkill/DeleteUserSkill?UserSkillId="+UserSkillId,this.httpOptions);
  }
  GetUserSkillById(UserSkillId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserSkill/GetUserSkillById?UserSkillId=" +UserSkillId, this.httpOptions);
  }
  UpdateUserSkill(UserSkill): Observable<any> {
    return this.http.post<UserSkill>( Global.SERVICE_API_URL +"UserSkill/UpdateUserSkill", UserSkill, this.httpOptions);
  } 
 


  AddUserEducation(UserEducation): Observable<any> {
    return this.http.post<UserEducation>( Global.SERVICE_API_URL +"UserEducation/AddUserEducation", UserEducation, this.httpOptions);
  } 
  GetAllUserEducation() {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserEducation/GetAllUserEducation", this.httpOptions);
  }
  DeleteUserEducation(UserEducationId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"UserEducation/GetUserEducationById?UserEducationId="+UserEducationId,this.httpOptions);
  }
  GetUserEducationById(UserEducationId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserEducation/GetUserEducationById?UserEducationId=" +UserEducationId, this.httpOptions);
  }
  UpdateUserEducation(UserEducation): Observable<any> {
    return this.http.post<UserEducation>( Global.SERVICE_API_URL +"UserEducation/UpdateUserEducation", UserEducation, this.httpOptions);
  } 


  AddUserDetail(UserDetail): Observable<any> {
    return this.http.post<UserDetail>( Global.SERVICE_API_URL +"UserDetail/AddUserDetail", UserDetail, this.httpOptions);
  } 
  GetAllUserDetail() {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserDetail/GetAllUserDetail", this.httpOptions);
  }
  DeleteUserDetail(UserDetailId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"UserDetail/DeleteUserDetail?UserDetailId="+UserDetailId,this.httpOptions);
  }
  GetUserDetailById(UserDetailId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"UserDetail/GetUserDetailById?UserDetailId=" +UserDetailId, this.httpOptions);
  }
  UpdateUserDetail(UserDetail): Observable<any> {
    return this.http.post<UserDetail>( Global.SERVICE_API_URL +"UserDetail/UpdateUserDetail", UserDetail, this.httpOptions);
  } 
  SaveUserDetailImage(formdata,UserDetailId): Observable<any> {
    const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"UserDetail/SaveUserDetailImage?UserDetailId="+UserDetailId, formdata, null );
    return this.http.request(uploadReq);
  }




  AddVendorDetail(VendorDetail): Observable<any> {
    return this.http.post<VendorDetail>( Global.SERVICE_API_URL +"VendorDetail/AddVendorDetail", VendorDetail, this.httpOptions);
  } 
  GetAllVendorDetail() {
    return this.http.get<any>( Global.SERVICE_API_URL +"VendorDetail/GetAllVendorDetail", this.httpOptions);
  }
  DeleteVendorDetail(VendorDetailId): Observable<any> {
    Observable<VendorDetail>
    return this.http.delete<any>( Global.SERVICE_API_URL +"VendorDetail/DeleteVendorDetail?VendorDetailId="+VendorDetailId,this.httpOptions);
  }
  GetVendorDetailById(VendorDetailId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"VendorDetail/GetVendorDetailById?VendorDetailId=" +VendorDetailId, this.httpOptions);
  }
  UpdateVendorDetail(VendorDetail): Observable<any> {
    return this.http.post<VendorDetail>( Global.SERVICE_API_URL +"VendorDetail/UpdateVendorDetail", VendorDetail, this.httpOptions);
  } 
  SaveVendorDetailImage(formdata,VendorDetailId): Observable<any> {
    const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"VendorDetail/SaveVendorDetailImage?VendorDetailId="+VendorDetailId, formdata, null );
    return this.http.request(uploadReq);
  }





  AddAdminDetail(AdminDetail): Observable<any> {
    return this.http.post<AdminDetail>( Global.SERVICE_API_URL +"AdminDetail/AddAdminDetail", AdminDetail,this.httpOptions);
  } 
  GetAllAdminDetail() {
    return this.http.get<any>( Global.SERVICE_API_URL +"AdminDetail/GetAllAdminDetail",this.httpOptions);
  }
  DeleteAdminDetail(AdminDetailId): Observable<any> {
    return this.http.delete<any>( Global.SERVICE_API_URL +"AdminDetail/DeleteAdminDetail?AdminDetailId="+AdminDetailId,this.httpOptions);
  }
  GetAdminDetailById(AdminDetailId): Observable<any> {
    return this.http.get<any>( Global.SERVICE_API_URL +"AdminDetail/GetAdminDetailById?AdminDetailId="+AdminDetailId,this.httpOptions);
  }
  UpdateAdminDetail(AdminDetail): Observable<any> {
    return this.http.post<AdminDetail>( Global.SERVICE_API_URL +"AdminDetail/UpdateAdminDetail",AdminDetail,this.httpOptions);
  } 
  SaveAdminDetailImage(formdata,AdminDetailId): Observable<any> {
    const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"AdminDetail/SaveAdminDetailImage?AdminDetailId="+AdminDetailId,formdata,null );
    return this.http.request(uploadReq);
  }




    
    AddSkills(Skills): Observable<any> {
      return this.http.post<Skills>(Global.SERVICE_API_URL +"Skills/AddSkills", Skills, this.httpOptions);
    } 
    GetAllSkills() {
      return this.http.get<any>(Global.SERVICE_API_URL +"Skills/GetAllSkills", this.httpOptions);
    }
    DeleteSkills(SkillsId): Observable<any> {
      return this.http.delete<any>(Global.SERVICE_API_URL +"Skills/DeleteSkills?SkillsId="+SkillsId,this.httpOptions);
    }
    GetSkillsById(SkillsId): Observable<any> {
      return this.http.get<any>(Global.SERVICE_API_URL +"Skills/GetSkillsById?SkillsId=" +SkillsId, this.httpOptions);
    }
    UpdateSkills(Skills): Observable<any> {
      return this.http.post<Skills>(Global.SERVICE_API_URL +"Skills/UpdateSkills", Skills, this.httpOptions);
    } 
    // SaveSkillsImage(formdata,SkillsId): Observable<any> {
    //   const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"Skills/SaveSkillsImage?Id="+SkillsId, formdata, null );
    //   return this.http.request(uploadReq);
    // }
  



    AddDemo(Demo): Observable<any> {
      return this.http.post<Demo>( Global.SERVICE_API_URL +"Demo/AddDemo", Demo,this.httpOptions);
    } 
    GetAllDemo() {
      return this.http.get<any>( Global.SERVICE_API_URL +"Demo/GetAllDemo",this.httpOptions);
    }
    DeleteDemo(DemoId): Observable<any> {
      return this.http.delete<any>( Global.SERVICE_API_URL +"Demo/DeleteDemo?DemoId="+DemoId,this.httpOptions);
    }
    GetDemoById(DemoId): Observable<any> {
      return this.http.get<any>( Global.SERVICE_API_URL +"Demo/GetDemoById?DemoId="+DemoId,this.httpOptions);
    }
    UpdateDemo(Demo): Observable<any> {
      return this.http.post<Demo>( Global.SERVICE_API_URL +"Demo/UpdateDemo",Demo,this.httpOptions);
    } 
    SaveDemoImage(formdata,DemoId): Observable<any> {
      const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"Demo/SaveDemoImage?DemoId="+DemoId,formdata,null );
      return this.http.request(uploadReq);
    }
    SaveDemoPDF(formdata,DemoId): Observable<any> {
      const uploadReq = new HttpRequest('Post',Global.SERVICE_API_URL +"Demo/SaveDemoPDF?DemoId="+DemoId,formdata,null );
      return this.http.request(uploadReq);
    }


  }



  




