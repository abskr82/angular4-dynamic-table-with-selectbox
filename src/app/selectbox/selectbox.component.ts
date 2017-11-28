import { Component } from '@angular/core';

export interface Books {
    id: number,
    name: string,
    type: string
}

@Component({
    selector: 'app-select-box',
    templateUrl: './selectbox.component.html'
})



export class SelectBoxComponent {
    selectedValue;
    objArr = [
        {id: 1, name: 'python', type: 'abc'},
        {id: 2, name: 'Ruby', type: 'xyz'},
        {id: 3, name: 'math', type: 'pqr'},
        {id: 4, name: 'science', type: 'abc'},
        {id: 5, name: 'hindi', type: 'xyz'},
        {id: 6, name: 'history', type: 'pqr'}
    ] as Books[];

    handleChange () {
        console.log('jj', this.selectedValue);
    }


}
