import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModelDrivenFormComponent } from './student-model-driven-form.component';

describe('StudentModelDrivenFormComponent', () => {
  let component: StudentModelDrivenFormComponent;
  let fixture: ComponentFixture<StudentModelDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModelDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
