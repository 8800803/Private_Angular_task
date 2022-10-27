import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  List: { id: number, name: string }[] = [

  ];

  constructor() { }

  ngOnInit(): void {
    this.List = this.element.options;
  }
  @Input() element:any;
  // @Input() options:any;
  // @Input() label:any;
  @Input('formControl')
  formControl!: UntypedFormControl;

}
