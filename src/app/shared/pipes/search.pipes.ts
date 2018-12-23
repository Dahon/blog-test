import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(value: any[], term: string): any[] {
        return value.filter((x: any) => x.title.toLowerCase().startsWith(term.toLowerCase()) || x.body.toLowerCase().startsWith(term.toLowerCase()))
    }
}   