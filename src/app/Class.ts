export class Achievement {
    AchievementId: number;
    RegistrationId: number;
    Title: string;
    Description: string;
    Certificate: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}


export class AdminRegistration {
    AdminRegistrationId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OtpNo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class Logina {
    Email: string;
    Password: string;
}

export class VendorRegistration {
    VendorRegistrationId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OtpNo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class Loginv {
    Email: string;
    Password: string;
}




export class UserSkill {
    Skills: Skills
    UserSkillId: number;
    SkillId: number;
    RegistrationId: number;
    Certificate: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}


export class UserEducation {
    UserEducationId: number;
    RegistrationId: number;
    Title: string;
    Description: string;
    University: string;
    College: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}




export class UserDetail {
    UserDetailId: number;
    RegistrationId: number;
    EndUserPlanId: number;
    ProfileTagLine: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    ContactNo: string;
    CountryId: number;
    StateId: number;
    CityId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class VendorDetail {
    VendorDetailId: number;
    RegistrationId: number;
    ProfileTagLine: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    ContactNo: string;
    CountryId: number;
    StateId: number;
    CityId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}

export class AdminDetail {
    AdminDetailId: number;
    RegistrationId: number;
    ProfileTagLine: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    ContactNo: string;
    CountryId: number;
    StateId: number;
    CityId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}


export class Skills {

    SkillsId: number;
    IndustryId: number;
    Title: string;
    Description: string;
    CertificateStatus: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

}


export class Demo {

    DemoId: number;
    Photo: string;
    PDF: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    name: any;

}


