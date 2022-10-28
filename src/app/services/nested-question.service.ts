import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestedQuestionService {

  constructor() { }
  public GetData() {

    let ViewData:any=[
      {
          "form":"addressForm",
          "key": "street",
          "label": "Street",
          "type": "text",
          "required": true,
          "value":"12",
          "order": 10
        },
        {
          "form":"addressForm",
          "key": "city",
          "label": "City",
          "type": "text",
          "required": true,
          "value":"Islamabad",
          "order": 11
        },
        {
          "form":"addressForm",
          "key": "state",
          "label": "State",
          "type": "text",
          "required": true,
          "value":"Pakistan",
          "order": 12
        },


    ];


    return ViewData;
}
}
