import { Component, Input, OnInit } from '@angular/core';
import { FormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-education',
  templateUrl: './nested-education.component.html',
  styleUrls: ['./nested-education.component.scss']
})
export class NestedEducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  group!: UntypedFormGroup;

  get educationArray(): FormArray {
    return <FormArray>this.group.get('education');
  }

}
