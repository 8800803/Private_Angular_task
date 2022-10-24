import { Component } from '@angular/core';
import {FormControl,FormGroup,FormGroupName, Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <h2>First Dynamic Form</h2>
  <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
</div>` ,
providers:[QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService){
    this.questions$ = service.getQuestions();
  }

  title = 'firstProject';

  loginForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  })
  // getValue(values:any){
  //   console.log(values);

  // }
  get name() {return this.loginForm.get('name')}
}


