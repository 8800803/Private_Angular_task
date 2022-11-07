import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldsDirective } from './directives/form-fields.directive';
import { ChipsComponent } from './form-fields/chips/chips.component';
import { CustomCheckboxComponent } from './form-fields/custom-checkbox/custom-checkbox.component';
import { CustomLabelComponent } from './form-fields/custom-label/custom-label.component';
import { CustomRadioComponent } from './form-fields/custom-radio/custom-radio.component';
import { CustomSelectComponent } from './form-fields/custom-select/custom-select.component';
import { CustomSelectionsComponent } from './form-fields/custom-selections/custom-selections.component';
import { CustomTextComponent } from './form-fields/custom-text/custom-text.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldsDirective,
    CustomTextComponent,
    CustomSelectComponent,
    CustomSelectionsComponent,
    CustomRadioComponent,
    CustomLabelComponent,
    CustomCheckboxComponent,
    ChipsComponent,
    NestedFormComponent, 
    ObjectToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
