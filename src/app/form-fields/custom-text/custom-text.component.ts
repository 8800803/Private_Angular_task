import { Component, Input, OnInit } from '@angular/core';
import { FormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss']
})
export class CustomTextComponent {

  constructor() { }

  @Input() element:any;
  // @Input()
  // group!: UntypedFormGroup;
  formControl!: UntypedFormControl;
  @Input!('section') section:any;

  // get addressArray(): FormArray {
  //   return <FormArray>this.group.get('address');
  // }

}
