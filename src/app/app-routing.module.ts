import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddVendorRegistrationComponent } from './VendorRegistration/add-vendor-registration/add-vendor-registration.component';
import { VendorRegistrationListComponent } from './VendorRegistration/vendor-registration-list/vendor-registration-list.component';
import { UpdateVendorRegistrationComponent } from './VendorRegistration/update-vendor-registration/update-vendor-registration.component';

import { AddAchievementComponent } from './Achievement/add-achievement/add-achievement.component';
import { AchievementListComponent } from './Achievement/achievementent-list/achievementent-list.component';
import { UpdateAchievementComponent } from './Achievement/update-achievementent/update-achievementent.component';

import { AddAdminRegistrationComponent } from './AdminRegistration/add-admin-registration/add-admin-registration.component';
import { AdminRegistrationListComponent } from './AdminRegistration/admin-registration-list/admin-registration-list.component';
import { UpdateAdminRegistrationComponent } from './AdminRegistration/update-admin-registration/update-admin-registration.component';
import { AddUserSkillComponent } from './UserSkill/add-user-skill/add-user-skill.component';
import { UserSkillListComponent } from './UserSkill/user-skill-list/user-skill-list.component';
import { UpdateUserSkillComponent } from './UserSkill/update-user-skill/update-user-skill.component';
import { AddUserEducationComponent } from './UserEducation/add-user-education/add-user-education.component';
import { UpdateUserEducationComponent } from './UserEducation/update-user-education/update-user-education.component';
import { UserEducationListComponent } from './UserEducation/user-education-list/user-education-list.component';
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
import { DropdownComponent } from './drop-do-wn/drop-do-wn.component';





const routes: Routes = [
  
    
     { path: 'AddAchievement', component: AddAchievementComponent },
     { path: 'AchievementList', component: AchievementListComponent },
     { path: 'UpdateAchievement', component: UpdateAchievementComponent },
     { path: 'UpdateAchievement/:AchievementId', component: UpdateAchievementComponent },
    //  { path: 'AddVendorRegistrationComponent',   redirectTo: '/AddVendorRegistrationComponent', pathMatch: 'full' }, // redirect to `first-component`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page



    {path: 'AddVendorRegistration', component: AddVendorRegistrationComponent },
    { path: 'VendorRegistrationList', component: VendorRegistrationListComponent },
    { path: 'UpdateVendorRegistration', component: UpdateVendorRegistrationComponent },
    { path: 'UpdateVendorRegistration/:VendorRegistrationId', component: UpdateVendorRegistrationComponent },


    {path: 'AddAdminRegistration', component: AddAdminRegistrationComponent },
    { path: 'AdminRegistrationList', component: AdminRegistrationListComponent },
    { path: 'UpdateAdminRegistration', component: UpdateAdminRegistrationComponent },
    { path: 'UpdateAdminRegistration/:AdminRegistrationId', component: UpdateAdminRegistrationComponent },
    { path: 'Logina', component: LoginaComponent },
    { path: 'ForgotPasswordMail', component: ForgotPasswordMailComponent },
    { path: 'ForgotPasswordOTP/:AdminRegistrationId', component: ForgotPasswordOTPComponent },
    { path: 'MailVerificationOTP', component: MailVerificationOTPComponent },
    { path: 'reset-password/:AdminRegistrationId', component: ResetPasswordComponent },
    
    {path: 'AddUserSkill', component: AddUserSkillComponent },
    { path: 'UserSkillList', component: UserSkillListComponent },
    { path: 'UpdateUserSkill', component: UpdateUserSkillComponent },
    { path: 'UpdateUserSkill/:UserSkillId', component: UpdateUserSkillComponent },


    {path: 'AddUserEducation', component: AddUserEducationComponent },
    { path: 'UserEducationList', component: UserEducationListComponent },
    { path: 'UpdateUserEducation', component: UpdateUserEducationComponent },
    { path: 'UpdateUserEducation/:UserEducationId', component: UpdateUserEducationComponent },


    {path: 'AddUserDetail', component: AddUserDetailComponent },
    { path: 'UserDetailList', component: UserDetailListComponent },
    { path: 'UpdateUserDetail', component: UpdateUserDetailComponent },
    { path: 'UpdateUserDetail/:UserDetailId', component: UpdateUserDetailComponent },



    {path: 'AddVendorDetail', component: AddVendorDetailComponent },
    { path: 'VendorDetailList', component: VendorDetailListComponent },
    { path: 'UpdateVendorDetail', component: UpdateVendorDetailComponent },
    { path: 'UpdateVendorDetail/:VendorDetailId', component: UpdateVendorDetailComponent },


    {path: 'AddAdminDetail', component: AddAdminDetailComponent },
    { path: 'AdminDetailList', component: AdminDetailListComponent },
    { path: 'UpdateAdminDetail', component: UpdateAdminDetailComponent },
    { path: 'UpdateAdminDetail/:AdminDetailId', component: UpdateAdminDetailComponent },


    {path: 'AddSkills', component: AddSkillsComponent},
    { path: 'SkillsList', component: SkillsListComponent },
    { path: 'UpdateAdminDetail', component: UpdateSkillsComponent },
    { path: 'UpdateSkills/:SkillsId', component: UpdateSkillsComponent },

    {path: 'AddDemo', component: AddDemoComponent},
    { path: 'DemoList', component: DemoListComponent },
    { path: 'UpdateDemo', component: UpdateDemoComponent },
    { path: 'UpdateDemo/:DemoId', component: UpdateDemoComponent },


    {path: 'dropdown', component: DropdownComponent},
   
    




  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
