import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorDetailComponent } from './add-vendor-detail.component';

describe('AddVendorDetailComponent', () => {
  let component: AddVendorDetailComponent;
  let fixture: ComponentFixture<AddVendorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVendorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
