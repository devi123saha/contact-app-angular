import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchKey:string,propertyName:string ): any[] {

    //arraytransform
    const result:any=[]
    if(!allContacts || searchKey=='' || propertyName==''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propertyName].trim().toLowerCase().include(searchKey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    return result;

  }

}

