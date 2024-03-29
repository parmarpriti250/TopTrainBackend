import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';
import { AddAchievementComponent } from './Achievement/add-achievement/add-achievement.component';
import { AchievementListComponent } from './Achievement/achievementent-list/achievementent-list.component';
import { UpdateAchievementComponent} from './Achievement/update-achievementent/update-achievementent.component';

import { AddVendorRegistrationComponent } from './VendorRegistration/add-vendor-registration/add-vendor-registration.component';
import { VendorRegistrationListComponent } from './VendorRegistration/vendor-registration-list/vendor-registration-list.component';
import { UpdateVendorRegistrationComponent } from './VendorRegistration/update-vendor-registration/update-vendor-registration.component';

import { AddAdminRegistrationComponent } from './AdminRegistration/add-admin-registration/add-admin-registration.component';
import { AdminRegistrationListComponent } from './AdminRegistration/admin-registration-list/admin-registration-list.component';
import { UpdateAdminRegistrationComponent } from './AdminRegistration/update-admin-registration/update-admin-registration.component';

import { AddUserSkillComponent } from './UserSkill/add-user-skill/add-user-skill.component';
import { UserSkillListComponent } from './UserSkill/user-skill-list/user-skill-list.component';
import { UpdateUserSkillComponent } from './UserSkill/update-user-skill/update-user-skill.component';

import { AddUserEducationComponent } from './UserEducation/add-user-education/add-user-education.component';
import { UserEducationListComponent } from './UserEducation/user-education-list/user-education-list.component';
import { UpdateUserEducationComponent } from './UserEducation/update-user-education/update-user-education.component';
import { AddUserDetailComponent } from './UserDetail/add-user-detail/add-user-detail.component';
import { UserDetailListComponent } from './UserDetail/user-detail-list/user-detail-list.component';
import { UpdateUserDetailComponent } from './UserDetail/update-user-detail/update-user-detail.component';
import { AddVendorDetailComponent } from './VendorDetail/add-vendor-detail/add-vendor-detail.component';
import { VendorDetailListComponent } from './VendorDetail/vendor-detail-list/vendor-detail-list.component';
import { UpdateVendorDetailComponent } from './VendorDetail/update-vendor-detail/update-vendor-detail.component';
import { AddAdminDetailComponent } from './AdminDetail/add-admin-detail/add-admin-detail.component';
import { AdminDetailListComponent } from './AdminDetail/admin-detail-list/admin-detail-list.component';
import { UpdateAdminDetailComponent } from './AdminDetail/update-admin-detail/update-admin-detail.component';
import { AddSkillsComponent } from './Skills/add-skills/add-skills.component';
import { SkillsListComponent } from './Skills/skills-list/skills-list.component';
import { UpdateSkillsComponent } from './Skills/update-skills/update-skills.component';
import { LoginaComponent } from './AdminRegistration/logina/logina.component';
import { AddDemoComponent } from './Demo/add-demo/add-demo.component';
import { DemoListComponent } from './Demo/demo-list/demo-list.component';
import { UpdateDemoComponent } from './Demo/update-demo/update-demo.component';

import { ForgotPasswordOTPComponent } from './AdminRegistration/forgot-password-otp/forgot-password-otp.component';
import { ForgotPasswordMailComponent } from './AdminRegistration/forgot-password-mail/forgot-password-mail.component';
import { MailVerificationOTPComponent } from './AdminRegistration/mail-verification-otp/mail-verification-otp.component';
import { ResetPasswordComponent } from './AdminRegistration/reset-password/reset-password.component';



// import { UpdateDemoComponent } from './Demo/update-demo/update-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    AddAchievementComponent,
    AchievementListComponent,
    UpdateAchievementComponent,

    AddVendorRegistrationComponent,
    VendorRegistrationListComponent,
    UpdateVendorRegistrationComponent,

    AddAdminRegistrationComponent,
    AdminRegistrationListComponent,
    UpdateAdminRegistrationComponent,
    LoginaComponent,
    ForgotPasswordOTPComponent,
    ForgotPasswordMailComponent,
    MailVerificationOTPComponent,

    
    AddUserSkillComponent,
    UserSkillListComponent,
    UpdateUserSkillComponent,

    AddUserEducationComponent,
    UserEducationListComponent,
    UpdateUserEducationComponent,

    AddUserDetailComponent,
    UserDetailListComponent,
    UpdateUserDetailComponent,

    AddVendorDetailComponent,
    VendorDetailListComponent,
    UpdateVendorDetailComponent,
    
    AddAdminDetailComponent,
    AdminDetailListComponent,
    UpdateAdminDetailComponent,
    
    AddSkillsComponent,
    SkillsListComponent,
    UpdateSkillsComponent,

    AddDemoComponent,
    DemoListComponent,
    UpdateDemoComponent,
    ResetPasswordComponent,

    
    
   
   

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
