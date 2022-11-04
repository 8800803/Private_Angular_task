import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent implements OnInit {
  isHidden$!: Observable<boolean>;
  constructor(private _fb: FormBuilder) {}
  hidden: boolean = true;
  test: any;
  value: any;
  ngOnInit(): void {
    this.getHiddenFields();
    this.group.valueChanges.subscribe((selectedValue: any) => {
      const keyValue = this.getDirtyValues(this.group);

      for (var key in keyValue) {
        for (var keyInner in keyValue[key]) {
          let temp: any = this.element.fields.values.filter(
            (x: any) => keyInner == x.dependsOn
          );
          let dependStateArray: any = temp[0].dependState;

          let original: any = keyValue[key];
          dependStateArray.forEach((el: any) => {
            if (original[keyInner] === el) {
              temp[0].hidden = false;
              this.hidden = false;
            }
          });
          // if(original[keyInner] == temp)
        }
      }

      //this.element.fields.values.filter((x:any) => value.includes(x.GroupId));
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

  somethingChanged(event: any) {
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
