import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent {
  @Input() element: any;
  @Input() formName: any;
  @Input() group!: UntypedFormGroup;

  canShow(config: any) {
    if (!config.dependsOn) {
      return true;
    }

    return config.dependState.includes(
      this.group.get(this.formName)?.get(config.dependsOn)?.value
    );
  }
}
