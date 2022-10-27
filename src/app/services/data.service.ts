import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public GetData() {

    let ViewData:any=[
      {
        "key": "firstName",
        "label": "Name",
        "type": "text",
        "value": "Yawar",
        "required": true,
        "order": 1
      },
      {
        "key": "Faimly",
        "label": "Faimly",
        "type": "text",
        "value": "family",
        "required": true,
        "order": 2,
      },

      {
        "key": "Password",
        "label": "Password",
        "type": "password",
        "value": "test",
        "required": true,
        "order": 3
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "value": "sardaryawarabbas@gmail.com",
        "required": true,
        "order": 4
      },
      {
        "key": "Time",
        "label": "Time",
        "type": "time",
        "required": true,
        "order": 7
      },
      {
        "key": "Date",
        "label": "Date",
        "type": "date",
        "required": true,
        "order": 8
      },
      {
        "key": "Country",
        "label": "Country",
        "type": "dropdown",
        "value": 1,
        "required": true,
        "options": [
          {
            "id": 1,
            "name": "Pakistan"
          },
          {
            "id": 2,
            "name": "Dubai"
          },
          {
            "id": 3,
            "name": "UAE"
          }
        ],
        "order": 6
      },
      {
        "key": "rememberme",
        "label": "Remember",
        "type": "checkbox",
        "value": true,
        "order": 5
      },
      {
        "key": "Gender",
        "label": "Gender",
        "type": "radio",
        "value": "m",
        "required": true,
        "options": [
          {
            "key": "Male",
            "value": "m"
          },
          {
            "key": "Female",
            "value": "f"
          }
        ],
        "order": 6
      },

      // {
      //   "key": "adresssections",
      //   "label": "Adress",
      //   "type": "sections",
      //   "value": "",
      //   "order": 2,
      //   sections:[
      //     {
      //       "key": "street",
      //       "label": "Street",
      //       "type": "text",
      //       "value": "1",

      //       "order": 2,
      //     },{
      //       "key": "House",
      //       "label": "House",
      //       "type": "text",
      //       "value": "2",
      //       "required": true,
      //       "order": 2,
      //     },


      //   ]
      // },
      {
        "key": "Chip",
        "label": "Chip",
        "type": "chips",
        "required": true,
        "options": ["apple","banana"],
        "order": 9
      },
      // {
      //   "key": "nested",
      //   "label": "nested",
      //   "type": "email",
      //   "required": true,
      //   "value":"nested@gmail.com",
      //   "order": 10
      // },


    ];


    return ViewData;
}
}
