import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorDetailComponent } from './update-vendor-detail.component';

describe('UpdateVendorDetailComponent', () => {
  let component: UpdateVendorDetailComponent;
  let fixture: ComponentFixture<UpdateVendorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVendorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVendorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
