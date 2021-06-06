import { User } from './../../classes/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: User[], filterBy: string): User[] {
    return list.filter(g => g.name.last.startsWith(filterBy));
  }

}
