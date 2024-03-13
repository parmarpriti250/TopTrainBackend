import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSkillComponent } from './update-user-skill.component';

describe('UpdateUserSkillComponent', () => {
  let component: UpdateUserSkillComponent;
  let fixture: ComponentFixture<UpdateUserSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
