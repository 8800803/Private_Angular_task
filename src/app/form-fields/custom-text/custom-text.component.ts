import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss'],
})
export class CustomTextComponent implements OnInit {
  hidden: boolean = true;
  test: any;
  value: any;
  ngOnInit(): void {
    // this.getHiddenFields();
  }
  constructor() {}

  @Input() element: any;
  // @Input()
  // group!: UntypedFormGroup;
  formControl!: UntypedFormControl;
  @(Input!('section')) section: any;

  // somethingChanged(event: any) {
  //   console.log(event.target.value);
  //   if (event.target.value == this.value[0]) {
  //     this.hidden = false;
  //   }
  // }

  // getHiddenFields() {
  //   if (this.element.dependsOn != null) {
  //     this.test = this.element.dependsOn;
  //     this.value = this.element.dependState;
  //     console.log(this.value);
  //   }
  // }
}
