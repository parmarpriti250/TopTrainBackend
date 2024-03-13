import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationListComponent } from './vendor-registration-list.component';

describe('VendorRegistrationListComponent', () => {
  let component: VendorRegistrationListComponent;
  let fixture: ComponentFixture<VendorRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRegistrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
