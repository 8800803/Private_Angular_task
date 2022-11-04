import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, UntypedFormGroup } from '@angular/forms';

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
    this.group.valueChanges.subscribe((selectedValue: any) => {
      const keyValue = this.getDirtyValues(this.group);
      console.log(keyValue);

      for (var key in keyValue) {
        for (var keyInner in keyValue[key]) {
          let temp: any = this.element.fields.values.filter(
            (x: any) => keyInner == x.dependsOn
          );
          console.log(temp);

          let dependStateArray: any;
          if (temp[0] != null) {
            dependStateArray = temp[0].dependState;
          }

          let original: any = keyValue[key];
          if (dependStateArray != null) {
            dependStateArray.forEach((el: any) => {
              if (original[keyInner] === el) {
                temp[0].hidden = false;
                this.hidden = false;
              }
            });
          }
        }
      }
    });
  }

  getDirtyValues(form: any) {
    let dirtyValues: any = {};

    Object.keys(form.controls).forEach((key) => {
      const currentControl = form.controls[key];

      if (currentControl.dirty) {
        if (currentControl.controls)
          dirtyValues[key] = this.getDirtyValues(currentControl);
        else dirtyValues[key] = currentControl.value;
      }
    });

    return dirtyValues;
  }

  @Input() element: any;
  @Input() formName: any;
  @Input()
  group!: UntypedFormGroup;
  get addressArray(): FormArray {
    return <FormArray>this.group.get(this.formName);
  }
}
