import {my_display_alpha} from "../day-1/exercice-1.js"

export const my_display_unicode = (arr) => {
  const alpha = my_display_alpha();
    const alphaMaj = my_display_alpha().toUpperCase();
    let resarr = '';
    let i = 0;
    if (arr) {
        arr.forEach(element => {

          if (element >= 65 && element <= 90) {
            resarr += alphaMaj[element - 65];
            i++;
        }
          if (element >= 48 && element <= 57) {
                resarr +=  element - 48;
                i++;
            }
            
          if (element >= 97 && element <= 122) {
                resarr += alpha[element - 97];
                i++;
            }
          if (element === 32) {
                resarr += ' ';
                i++;
            }
        });
    }
    return resarr;
}

let fruits = ['43', 'Z'];
console.log(my_display_unicode(fruits))