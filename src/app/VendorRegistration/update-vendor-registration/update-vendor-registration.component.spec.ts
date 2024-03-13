import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorRegistrationComponent } from './update-vendor-registration.component';

describe('UpdateVendorRegistrationComponent', () => {
  let component: UpdateVendorRegistrationComponent;
  let fixture: ComponentFixture<UpdateVendorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVendorRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVendorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
