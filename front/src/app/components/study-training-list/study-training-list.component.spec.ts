import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTrainingListComponent } from './study-training-list.component';

describe('StudyTrainingListComponent', () => {
  let component: StudyTrainingListComponent;
  let fixture: ComponentFixture<StudyTrainingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTrainingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
