import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserSkillComponent } from './add-user-skill.component';

describe('AddUserSkillComponent', () => {
  let component: AddUserSkillComponent;
  let fixture: ComponentFixture<AddUserSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
