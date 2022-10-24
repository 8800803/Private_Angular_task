import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question-dropdown';
import { QuestionBase } from '../question-base';
import { TextboxQuestion } from '../question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'fenale',  value: 'Female'}
        ],
        order: 5
      }),

      new TextboxQuestion({
        key:'cPassword',
        label:'Confirm Password',
        order: 4
      }),

      new TextboxQuestion({
        key:'password',
        label:'Password',
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Yawar Abbas',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  constructor() { }
}
