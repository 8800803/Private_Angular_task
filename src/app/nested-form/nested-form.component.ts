import { Component, Input, OnInit } from '@angular/core';
import { FormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.addressArray);

  }

  @Input()
  group!: UntypedFormGroup;
  @Input() element:any;
  formControl!: UntypedFormControl;
   get addressArray(): FormArray {
      return <FormArray>this.group.get('address');
    }

    // onSearchChange(searchValue: any): void {
    //   console.log(searchValue);

    //   this.group.patchValue(searchValue)
    // }

}
