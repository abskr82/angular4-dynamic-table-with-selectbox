import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'title'
})

export class TitlePipe implements PipeTransform {

    transform(data: any[], type: any[]) {
        console.log(data);
        console.log('type', type);
        if (data) {
            return data.filter(val => {
                return val.type === type;
            });
        }
    }

}
