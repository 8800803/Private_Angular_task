import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }
  public GetData() {
    let ViewData: any = [
      {
        key: 'firstName',
        label: 'Name',
        type: 'text',
        value: 'Yawar',
        required: true,
        order: 1,
      },
      {
        key: 'family',
        label: 'Family',
        type: 'text',
        value: 'family',
        required: true,
        hidden: true, 
        order: 2,
      }, 
      {
        key: 'Password',
        label: 'Password',
        type: 'password',
        value: 'test4',
        required: true,
        order: 3,
      },
      {
        key: 'Email',
        label: 'Email',
        type: 'email',
        value: 'sardaryawarabbas@gmail.com',
        required: true,
        order: 4,
      },
      {
        key: 'Time',
        label: 'Time',
        type: 'time',
        required: true,
        order: 7,
      },
      {
        key: 'Date',
        label: 'Date',
        type: 'date',
        required: true,
        order: 8,
      },
      {
        key: 'Country',
        label: 'Country',
        type: 'dropdown',
        value: 1,
        required: true,
        options: [
          {
            id: 1,
            name: 'Pakistan',
          },
          {
            id: 2,
            name: 'Dubai',
          },
          {
            id: 3,
            name: 'UAE',
          },
        ],
        order: 6,
      },
      {
        key: 'rememberme',
        label: 'Remember',
        type: 'checkbox',
        value: true,
        order: 5,
      },
      {
        key: 'Gender',
        label: 'Gender',
        type: 'radio',
        value: 'm',
        required: true,
        options: [
          {
            key: 'Male',
            value: 'm',
          },
          {
            key: 'Female',
            value: 'f',
          },
        ],
        order: 6,
      },
      {
        key: 'Chip',
        label: 'Chip',
        type: 'chips',
        required: true,
        options: ['apple', 'banana'],
        order: 9,
      },
      {
        key: 'group',
        label: 'Group',
        type: 'group',
        required: true,
        children: [
          {
            key: 'street',
            label: 'Street',
            type: 'text',
            required: true,
            value: '123',
            order: 10,
          },
          {
            key: 'sub',
            label: 'sub',
            required: true,
            value: 2,
            type: 'dropdown',
            options: [
              {
                id: 1,
                name: 'Pakistan1',
              },
              {
                id: 2,
                name: 'Dubai1',
              },
              {
                id: 3,
                name: 'UAE1',
              },
            ],
            order: 11,
            hidden: true,
            dependsOn: 'street',
            dependState: ['14', '12', 'test'],
          },
          {
            key: 'city',
            label: 'City',
            type: 'text',
            required: true,
            value: 'Islamabad',
            order: 12,
          },
          {
            key: 'dep',
            label: 'dep',
            type: 'text',
            required: true,
            value: 'dependent',
            order: 11,
            hidden: true,
            dependsOn: 'city',
            dependState: ['city', 'test'],
          },
          {
            key: 'state',
            label: 'State',
            type: 'text',
            required: true,
            value: 'Pakistan',
            order: 13,
          }
        ],
        order: 9,
      } 
    ];

    return ViewData;
  }
}
