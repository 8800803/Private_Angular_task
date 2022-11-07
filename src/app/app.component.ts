import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dynamicComponent';
  questions: any;
  form!: FormGroup;

  constructor(
    private DataService: DataService,
    private _fb: FormBuilder 
  ) {
    this.questions = this.DataService.GetData();
  }

  ngOnInit(): void {
    this.form! = this.createGroup(this.questions);

  }

  createGroup(config: any[]) {
    let group: any = {};
    config.forEach(field => {
      if (field.type == 'group') {
        group[field.key] = this.createGroup(field.children);
      } else {
        group[field.key] = field.required
          ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');
      }
    })
    return this._fb.group(group);
  }


}
