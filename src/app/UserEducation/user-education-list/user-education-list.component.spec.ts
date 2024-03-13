import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducationListComponent } from './user-education-list.component';

describe('UserEducationListComponent', () => {
  let component: UserEducationListComponent;
  let fixture: ComponentFixture<UserEducationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEducationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEducationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
