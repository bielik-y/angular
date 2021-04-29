import { Pipe, PipeTransform } from '@angular/core';
// создаем пайп для номера телефона
@Pipe({
    name: 'phone'
})
export class FormatPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        value = value.replace(/\s/g, '');
        if (value.length < 9){
            return 'empty';
        }
        else{
            value = value.substring(-9);
            value = '+38 (' + value.substring(0, 3) + ') ' + value.substring(2, 5) + '-' + value.substring(5, 7) + '-' +
            value.substring(7, 9);
            return value;
        }
    }
}
