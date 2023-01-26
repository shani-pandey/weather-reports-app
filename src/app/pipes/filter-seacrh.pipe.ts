import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSeacrh'
})
export class FilterSeacrhPipe implements PipeTransform {

  transform(item: any, searchItem: string): any {
    if(!item){
      return []
    }
    if(!searchItem){
      return item
    }
    searchItem = searchItem.toLowerCase();

    return item.filter((data:any)=>{
        return JSON.stringify(data).toLowerCase().includes(searchItem)
       
    })
  }

}
