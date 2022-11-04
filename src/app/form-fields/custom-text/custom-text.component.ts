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
  ngOnInit(): void {}
  constructor() {}

  @Input() element: any;
  // @Input()
  // group!: UntypedFormGroup;
  formControl!: UntypedFormControl;
  @(Input!('section')) section: any;
}
