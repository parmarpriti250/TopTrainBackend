import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserEducationComponent } from './add-user-education.component';

describe('AddUserEducationComponent', () => {
  let component: AddUserEducationComponent;
  let fixture: ComponentFixture<AddUserEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
