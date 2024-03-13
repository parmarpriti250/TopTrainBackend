import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserEducationComponent } from './update-user-education.component';

describe('UpdateUserEducationComponent', () => {
  let component: UpdateUserEducationComponent;
  let fixture: ComponentFixture<UpdateUserEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
