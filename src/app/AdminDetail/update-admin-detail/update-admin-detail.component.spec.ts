import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminDetailComponent } from './update-admin-detail.component';

describe('UpdateAdminDetailComponent', () => {
  let component: UpdateAdminDetailComponent;
  let fixture: ComponentFixture<UpdateAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
