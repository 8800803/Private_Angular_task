import { Component } from '@angular/core';
import {FormControl,FormGroup,FormGroupName, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
  loginForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  })
  // getValue(values:any){
  //   console.log(values);

  // }
  get name() {return this.loginForm.get('name')}
}


