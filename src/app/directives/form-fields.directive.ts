import { AfterViewInit, Directive, Input, Type, ViewContainerRef } from '@angular/core';
import { FormArray, UntypedFormGroup } from '@angular/forms';
import { ChipsComponent } from '../form-fields/chips/chips.component';
import { CustomCheckboxComponent } from '../form-fields/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from '../form-fields/custom-radio/custom-radio.component';
import { CustomSelectComponent } from '../form-fields/custom-select/custom-select.component';
import { CustomTextComponent } from '../form-fields/custom-text/custom-text.component';
import { NestedFormComponent } from '../nested-form/nested-form.component';

@Directive({
  selector: '[appFormFields]'
})
export class FormFieldsDirective implements AfterViewInit {
  models: { [type: string]: Type<any> } = {
    text: CustomTextComponent,
    password: CustomTextComponent,
    email: CustomTextComponent,
    checkbox: CustomCheckboxComponent,
    time:CustomTextComponent,
    date:CustomTextComponent,
    dropdown: CustomSelectComponent,
    radio: CustomRadioComponent,
    sections: CustomSelectComponent,
    chips:ChipsComponent,
    nestedForm:NestedFormComponent

  }

  constructor(private vcRef: ViewContainerRef) { }
  ngAfterViewInit(): void {
    this.questions.forEach((element: any) => {
      const type = element.type;
      var ref: any;
      const component = this.models[type];
      ref = this.vcRef.createComponent(component);
      ref.instance.element = element;
      ref.instance.formControl = this.group.get(element.key);
    });
    if(this.group.contains('address')){
      var ref: any;
      const component = this.models['nestedForm'];
      ref = this.vcRef.createComponent(component);
      ref.instance.group = this.group;
    }


  }

  @Input() nestedQuestions:any;
  // @Input() addressArray!:FormArray
  @Input() questions: any;
  @Input()
  group!: UntypedFormGroup;
  ngOnInit(): void {
  }

}
