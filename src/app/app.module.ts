import { SelectBoxComponent } from './selectbox/selectbox.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { TitlePipe } from './selectbox/title.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from 'app/forms/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormGroupComponent,
    SelectBoxComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
