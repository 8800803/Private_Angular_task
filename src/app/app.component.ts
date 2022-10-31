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
   nestedFormsName: string[] = ["address","education"]
  questions: any;
  nQuestions: any;
  form!: FormGroup;
   nestedAddressGroup:any ={};
   nestedEducationGroup:any ={};

  constructor(private DataService:DataService,private _fb: FormBuilder,private nestedQuestions:NestedQuestionService){
    this.questions= this.DataService.GetData();
    this.nQuestions = this.nestedQuestions.GetData();
  }

  ngOnInit(): void {
    this.form! = this.toFormGroup(this.questions);
    this.form.addControl('address',this._fb.group(this.nestedAddressGroup))
    this.form.addControl('education',this._fb.group(this.nestedEducationGroup))
  }
  toFormGroup(questions:any) {let group: any = {};

    questions.forEach((question: any ) => {
      if(question.form ==="address"){
        this.nestedAddressGroup[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      }
      else if(question.form ==="education"){
        this.nestedEducationGroup[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      }
      else if(question.type==="sections")
      {
        const group1: any = {};

        question.sections.forEach((question: any ) => {
          group1[question.key]=question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
        })
        group[question.key]=new FormGroup(group1);
      }
      else{
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      }
    });
    // group[this.nestedFormsName[0]] = this._fb.array([this._fb.group(nestedAddressGroup)])
    // group[this.nestedFormsName[1]] = this._fb.array([this._fb.group(nestedEducationGroup)])

    return this._fb.group(group);
  }


   isValid(key:any,type:any) {
    if(type!=="sections")
    {
      return this.form.controls[key].valid;
    }
   return true

  }

  isValid1(key:any,type:any) {
     let form1 =this.form.get(type) as FormArray;
     let bool = form1.controls[key].valid;
     return bool;
  }

}

