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
  hidden: boolean = true;
  test: any;
  value: any;
  ngOnInit(): void {
    this.getHiddenFields();
  }

  @Input() element: any;
  @Input() formName: any;
  @Input()
  group!: UntypedFormGroup;
  get addressArray(): FormArray {
    return <FormArray>this.group.get(this.formName);
  }

  somethingChanged(event: any) {
    console.log(event);
    if (
      event.target.value == this.value[0] ||
      event.target.value == this.value[1]
    ) {
      this.hidden = false;
    }
  }

  getHiddenFields() {
    this.element.fields.values.forEach((element: any) => {
      if (element.dependsOn != null) {
        this.test = element.dependsOn;
        this.value = element.dependState;
      }
    });
  }
}
