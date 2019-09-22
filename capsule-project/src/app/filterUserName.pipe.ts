import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterUserName'
})

export class FilterUserNamePipe implements PipeTransform {
    /* transform(items: any[], searchText: string): any[] {
       if(!items) return [];
       if(!searchText) return items;
   searchText = searchText.toLowerCase();
   return items.filter( it => {
       console.log(it.toString+" "+searchText);
         return it.toString().toLowerCase().includes(searchText);
       });
     }**/
   
   
    /**  transform(value: any, query: string, field: string): any {
       return query ? value.reduce((prev, next) => {
         if (next[field].includes(query)) { prev.push(next); }
         return prev;
       }, []) : value;
    }*/
   
    transform(categories: any, searchText: any): any {
       if(searchText == null) return categories;
   
       return categories.filter(function(category){
         return ((category.first_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ||(category.last_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1));
       })
     }
   }