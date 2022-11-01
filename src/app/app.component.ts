import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './services/data.service';
import { NestedQuestionService } from './services/nested-question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamicComponent';
  questions: any;
  nQuestions: any;
  form!: FormGroup;

  constructor(private DataService: DataService, private _fb: FormBuilder, private nestedQuestions: NestedQuestionService) {
    this.questions = this.DataService.GetData();
    this.nQuestions = this.nestedQuestions.GetData();
  }

  ngOnInit(): void {
    // this.form! = this._fb.group(this.toFormGroup(this.questions))
    this.form! = this.toFormGroup(this.questions);
  }
  toFormGroup(questions: any) {
    let group: any = {};
    const nestedAddressGroup: any = {};
    const nestedEducationGroup: any = {}; 
    questions.forEach((question: any) => {
      if (question.type === "group") {
        question.subForm.forEach(x => {
          nestedAddressGroup[x.key] = this._fb.control(x.value);
        })
        group[question.name] = this._fb.group(nestedAddressGroup)
      } else
        if (question.type === "nestedForm") {
          question.subForm.forEach(x => {
            nestedEducationGroup[x.key] = this._fb.control(x.value);
          })
          group[question.name] = this._fb.array([this._fb.group(nestedEducationGroup)])
        }
        else if (question.type === "sections") {
          const group1: any = {}; 
          question.sections.forEach((question: any) => {
            group1[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
              : new FormControl(question.value || '');
          })
          group[question.key] = new FormGroup(group1);
        }
        else {
          group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || '');
        }
    });

    // group['address'] = this._fb.array([this._fb.group(nestedAddressGroup)])
    // group['education'] = this._fb.array([this._fb.group(nestedEducationGroup)])
    // group['education'] = this._fb.array([this.addEducationGroup()])


    // console.log(this._fb.group(group));

    return this._fb.group(group);
  }

  isValid(key: any, type: any) {
    if (type !== "sections") {
      return this.form.controls[key].valid;
    }
    return true

  }

  isValid1(key: any, type: any) {
    let form1 = this.form.get(type) as FormArray;
    let bool = form1.controls[key].valid;
    return bool;
  }

  addAddressGroup(): FormGroup {
    return this._fb.group({
      street: '12',
      city: 'Islamabad',
      state: 'Pakistan'
    });
  }

  addEducationGroup(): FormGroup {
    return this._fb.group({
      degree: 'Software',
      field: 'Computer',
      major: 'test'
    });
  }

}

