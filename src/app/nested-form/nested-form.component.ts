import { Component, Input } from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent {
  @Input() element: any; 
  @Input() group!: UntypedFormGroup;

  get formGroup(): FormGroup {
    return this.group.get(this.element.key) as FormGroup
  } 
}
