import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form-group',
  templateUrl: './custom-form-group.component.html',
  styleUrls: ['./custom-form-group.component.scss']
})
export class CustomFormGroupComponent implements OnInit {
  @Input() element: any;
  @Input()
  group!: any;  

  constructor( 
  ) { }

  ngOnInit(): void { 
  }
 
}
