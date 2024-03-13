import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAchievemententComponent } from './update-achievementent.component';

describe('UpdateAchievemententComponent', () => {
  let component: UpdateAchievemententComponent;
  let fixture: ComponentFixture<UpdateAchievemententComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAchievemententComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAchievemententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
