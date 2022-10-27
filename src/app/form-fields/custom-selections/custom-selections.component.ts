import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-selections',
  templateUrl: './custom-selections.component.html',
  styleUrls: ['./custom-selections.component.scss']
})
export class CustomSelectionsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    console.log("Question",this.sectionlabe);
  }
  @Input() questions:any;
  @Input() group!:UntypedFormGroup;
  @Input() sectionlabe:any;

}
