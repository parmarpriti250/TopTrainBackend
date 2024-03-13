import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailListComponent } from './vendor-detail-list.component';

describe('VendorDetailListComponent', () => {
  let component: VendorDetailListComponent;
  let fixture: ComponentFixture<VendorDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDetailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
