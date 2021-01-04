import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDAOComponent } from './student-dao.component';

describe('StudentDAOComponent', () => {
  let component: StudentDAOComponent;
  let fixture: ComponentFixture<StudentDAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
