import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-education',
  templateUrl: './nested-education.component.html',
  styleUrls: ['./nested-education.component.scss'],
})
export class NestedEducationComponent implements OnInit {
  // @ViewChild('field') field: any;
  constructor() {}
  selectedOption: any = 'software';
  dependState: any = this.selectedOption;
  hidden: boolean = true;
  hidden2: boolean = true;
  i = 0;
  dependStatesName: string[] = [];
  changeField(event: any) {
    if (this.selectedOption == 'software') {
      this.hidden = true;
      this.hidden2 = true;
      // console.log(this.box);
    }
    if (event.target.value == 'civil') {
      this.hidden = false;
    }
    if (event.target.value == 'mechanical') {
      this.hidden2 = false;
    }
  }
  ngOnInit(): void {
    this.dependStates();
  }
  @Input() element: any;
  @Input() formName: any;
  @Input()
  group!: UntypedFormGroup;

  get educationArray(): FormArray {
    return <FormArray>this.group.get(this.formName);
  }
  dependStates() {
    this.element.fields.values.forEach((element: any) => {
      if (element.dependsOn != null) {
        this.dependStatesName[this.i] = element.dependState;
        this.i = this.i + 1;
      }
    });
  }
}
