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
  @Input() check: any;
  @Input()
  group!: UntypedFormGroup;
  formControl!: UntypedFormControl;
  @(Input!('section')) section: any;

  // canShow(config: any) {
  //   if (!config.dependsOn) {
  //     return true;
  //   }
  //   return config.dependState.includes(
  //     this.group.get('address')?.get(config.dependsOn)?.value
  //   );
  // }
}
