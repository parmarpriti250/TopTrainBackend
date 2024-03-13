import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminRegistrationComponent } from './add-admin-registration.component';

describe('AddAdminRegistrationComponent', () => {
  let component: AddAdminRegistrationComponent;
  let fixture: ComponentFixture<AddAdminRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
