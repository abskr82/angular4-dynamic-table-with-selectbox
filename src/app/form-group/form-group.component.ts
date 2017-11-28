// https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html'
})

export class FormGroupComponent {
    form: any;
    book = {
        colors: [
          { name: 'Red',  selected: false, id: 12 },
          { name: 'Orange',  selected: false, id: 2 },
        ]
      }

      constructor(private fb: FormBuilder) {

         this.form = this.fb.group({
           colors: this.buildColors()
         });
      }

      get colors() {
        return this.form.get('colors');
      };

      buildColors() {
        const arr = this.book.colors.map(color => {
          return this.fb.control(color.name);
        });
        return this.fb.array(arr);
      }

      submit (values, evt) {
        evt.preventDefault();
        const colorArr = values.colors.filter(val => val !== false);
        console.log(colorArr);
      }

}


