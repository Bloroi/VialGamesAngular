import { Pipe, PipeTransform } from '@angular/core';
import {Jeuxvideo} from './jeuxvideo';
import DateTimeFormat = Intl.DateTimeFormat;

@Pipe({
  name: 'filterprixJv'
})
export class FilterprixJvPipe implements PipeTransform {
  private static readonly RECENT: number = 0;
  private static readonly CROISSANT: number= 1;
  private static readonly DECROISSANT: number= 2;

  transform(value: Jeuxvideo[], filterWanted: number= 0): any {
    if (filterWanted == FilterprixJvPipe.RECENT) {
      value.sort((a: any, b: any) => {
        if (new Date(a.sortie) > new Date(b.sortie)) {
          return -1;
        } else if (a.sortie < b.sortie) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }

    if (filterWanted == FilterprixJvPipe.CROISSANT){
      value.sort((a: any, b: any) => {
        if (a.prix < b.prix) {
          return -1;
        } else if (a.prix > b.prix) {
          return 1;
        } else {
          return 0;
        }
      });

      return value;
    }

    if (filterWanted == FilterprixJvPipe.DECROISSANT){
      value.sort((a: any, b: any) => {
        if (a.prix > b.prix) {
          return -1;
        } else if (a.prix < b.prix) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }

  }

}

