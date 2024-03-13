import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorRegistrationComponent } from './add-vendor-registration.component';

describe('AddVendorRegistrationComponent', () => {
  let component: AddVendorRegistrationComponent;
  let fixture: ComponentFixture<AddVendorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVendorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
