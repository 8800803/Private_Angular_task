import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: ChipsComponent,
    multi:true
  }]
})
export class ChipsComponent implements OnInit, ControlValueAccessor {
  onPropagateChange:(value:any[])=>void = (value:any[])=>{}
  onPropagateTouch:(value:any)=>void = (value:any)=>{}
  chips: any = [];

  constructor() { }
  writeValue(obj: any): void {
    // this.chips = obj ?? [];
  }
  registerOnChange(fn: any): void {
    this.onPropagateChange=fn
  }
  registerOnTouched(fn: any): void {
    this.onPropagateTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {

  }
  @Input() element:any;
  // @Input() type:any;
  // @Input() label:any;
  // @Input() options:any;
  @Input('formControl')
  formControl!: UntypedFormControl;

  ngOnInit(): void {
    this.element.options.forEach((op: any) => {
      this.chips.push({name:op})
    });

  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.chips.push({name: value});
    }
    this.element.options = this.chips
    this.formControl.patchValue(this.element.options)
    this.onPropagateChange(this.element.options)

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.chips.indexOf(fruit);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
    this.onPropagateChange(this.chips)
  }

}
