import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestedQuestionService {

  constructor() { }
  public GetData() {

    let ViewData:any=[
      {
        "key": "FirstName",
        "label": "Name",
        "type": "text",
        "value": "Yawar",
        "required": true,
        "order": 10
      },
      {
        "key": "LastName",
        "label": "Name",
        "type": "text",
        "value": "Yawar",
        "required": true,
        "order": 11
      },


    ];


    return ViewData;
}
}
