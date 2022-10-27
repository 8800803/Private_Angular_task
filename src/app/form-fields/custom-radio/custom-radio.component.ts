import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.element.options)
  }

  @Input() element:any;
  // @Input('options') options:any;
  // @Input() label:any;
  @Input('formControl')
  formControl!: UntypedFormControl;

}
