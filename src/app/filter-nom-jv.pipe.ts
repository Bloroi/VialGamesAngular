import { Pipe, PipeTransform } from '@angular/core';
import {Jeuxvideo} from './jeuxvideo';

@Pipe({
  name: 'filterNomJv'
})
export class FilterNomJvPipe implements PipeTransform {
  //liste: Jeuxvideo[] = [];
  transform(value: Jeuxvideo[], filterWanted: string= ''): any {

    const chaine = filterWanted.toLowerCase();
/*
    for (let i = 0; i < value.length; i++) {
      if (this.comparaison(value[i].nom.toLowerCase(), chaine)) {
        this.liste.push(value[i]);
      }
    }

    return this.liste;*/
    return chaine ? value.filter( (item) => this.comparaison(item.nom.toLowerCase(), chaine) <= 8) : value;

    //return chaine ? value.filter( (item) => comparaison(item.nom.toLowerCase(),chaine) !== -1) : value;
    //return chaine ? value.filter( (item) => item.name.toLowerCase().indexOf(chaine) !== -1) : value;
  }


  public comparaison( s1: string, s2: string) {
    const row2 = [];
    if (s1 === s2) {

      return 0;
    } else {
      const s1_len = s1.length, s2_len = s2.length;
      if (s1_len && s2_len) {
        let i1 = 0, i2 = 0, a, b, c, c2, row = row2;
        while (i1 < s1_len)
          row[i1] = ++i1;
        while (i2 < s2_len) {
          c2 = s2.charCodeAt(i2);
          a = i2;
          ++i2;
          b = i2;
          for (i1 = 0; i1 < s1_len; ++i1) {
            c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
            a = row[i1];
            b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
            row[i1] = b;
          }
        }
        return b;
      } else {
        return s1_len + s2_len;
      }
    }


  }

  public leven(s: string, t: string){

      const d = []; //2d matrix

      // Step 1
      const n = s.length;
      const m = t.length;

      if (n == 0) return m;
      if (m == 0) return n;

      //Create an array of arrays in javascript (a descending loop is quicker)
      for (let i = n; i >= 0; i--) d[i] = [];

      // Step 2
      for (let i = n; i >= 0; i--) d[i][0] = i;
      for (let j = m; j >= 0; j--) d[0][j] = j;

      // Step 3
      for (let i = 1; i <= n; i++) {
        const s_i = s.charAt(i - 1);

        // Step 4
        for (let j = 1; j <= m; j++) {

          //Check the jagged ld total so far
          if (i == j && d[i][j] > 4) return n;

          const t_j = t.charAt(j - 1);
          const cost = (s_i == t_j) ? 0 : 1; // Step 5

          //Calculate the minimum
          let mi = d[i - 1][j] + 1;
          const b = d[i][j - 1] + 1;
          const c = d[i - 1][j - 1] + cost;

          if (b < mi) mi = b;
          if (c < mi) mi = c;

          d[i][j] = mi; // Step 6

          //Damerau transposition
          if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
            d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
          }
        }
      }

      // Step 7
      return d[n][m];
    }


}
