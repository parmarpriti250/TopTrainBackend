import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminRegistrationComponent } from './update-admin-registration.component';

describe('UpdateAdminRegistrationComponent', () => {
  let component: UpdateAdminRegistrationComponent;
  let fixture: ComponentFixture<UpdateAdminRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
