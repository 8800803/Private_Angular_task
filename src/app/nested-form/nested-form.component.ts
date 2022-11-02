import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  @Input() element: any;
  @Input() formName: any;
  @Input()
  group!: UntypedFormGroup;
  get addressArray(): FormArray {
    return <FormArray>this.group.get(this.formName);
  }
}
