import {
  AfterViewInit,
  Directive,
  Input,
  Renderer2,
  Type,
  ViewContainerRef
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ChipsComponent } from '../form-fields/chips/chips.component';
import { CustomCheckboxComponent } from '../form-fields/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from '../form-fields/custom-radio/custom-radio.component';
import { CustomSelectComponent } from '../form-fields/custom-select/custom-select.component';
import { CustomTextComponent } from '../form-fields/custom-text/custom-text.component';
import { NestedFormComponent } from '../nested-form/nested-form.component';

const models: { [type: string]: Type<any> } = {
  text: CustomTextComponent,
  password: CustomTextComponent,
  email: CustomTextComponent,
  checkbox: CustomCheckboxComponent,
  time: CustomTextComponent,
  date: CustomTextComponent,
  dropdown: CustomSelectComponent,
  radio: CustomRadioComponent,
  sections: CustomSelectComponent,
  chips: ChipsComponent,
  group: NestedFormComponent,
};
@Directive({
  selector: '[appFormFields]',
})
export class FormFieldsDirective implements AfterViewInit {

  @Input() questions: any;
  @Input()
  group!: UntypedFormGroup;

  constructor(
    private renderer: Renderer2,
    private vcRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    this.questions.forEach((element: any) => {
      const type = element.type;
      const component = models[type];
      const ref = this.vcRef.createComponent(component);
      ref.instance.element = element;
      ref.instance.group = this.group;
      ref.instance.formControl = this.group.get(element.key);
      if (element.dependsOn) {
        this.setDisplay(ref, element, this.group.get(element.dependsOn)?.value);
        this.group.get(element.dependsOn)?.valueChanges.subscribe(res => {
          this.setDisplay(ref, element, res);
        })
      }
    });
  }

  setDisplay(ref: any, element: any, res: any) {
    if (element.dependState.includes(res)) {
      this.renderer.setStyle(ref.location.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(ref.location.nativeElement, 'display', 'none');
    }
  }
}
