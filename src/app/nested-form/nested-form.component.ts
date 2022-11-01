import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  @Input() element: any;
  @Input()
  group!: any;
  @Input()
  formControl!: UntypedFormGroup;
  form: any;

  get f() {
    return this.group.get(this.element.name) as FormArray;
  }
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      [this.element.name]: this._fb.array([
        this.initData()
      ])
    });

    console.log(this.group)
    this.f.valueChanges.subscribe(value => {
      console.log('V ', value)
      // this.group.emit(value)
    });

  }
  initData() {
    let initData: any[] = [];
    this.element.subForm.forEach((x: any) => {
      initData[x.key] = this._fb.control('')
      this.group.get(this.formControl).controls.push(x.key)
    });
    return this._fb.group(initData);
  }
  trackByFn(index: number, item: any) {
    return item.trackingId;
  }



}
