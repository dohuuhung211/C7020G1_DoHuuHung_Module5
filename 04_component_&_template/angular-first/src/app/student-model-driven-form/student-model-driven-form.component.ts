import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {StudentDAOComponent} from "../student-dao/student-dao.component";
import {Router} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-student-model-driven-form',
  templateUrl: './student-model-driven-form.component.html',
  styleUrls: ['./student-model-driven-form.component.scss']
})
export class StudentModelDrivenFormComponent implements OnInit {
  studentForm: FormGroup;
  fileToUpload: File = null;
  constructor(private router: Router, private studentServiceService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.minLength(6),Validators.required]),
      mark: new FormControl('', [Validators.min(0), Validators.max(10)]),
      image: new FormControl('')
    })
  }

  onSubmit(studentForm: FormGroup) {
    this.studentServiceService.addNew(studentForm.value);
    this.router.navigateByUrl('');

  }

}
