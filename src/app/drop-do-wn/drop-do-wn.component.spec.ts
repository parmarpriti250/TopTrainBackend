import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDoWnComponent } from './drop-do-wn.component';

describe('DropDoWnComponent', () => {
  let component: DropDoWnComponent;
  let fixture: ComponentFixture<DropDoWnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDoWnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDoWnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
