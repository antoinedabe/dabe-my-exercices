export const my_display_combv2 = () => {
  const tab = [];
  let index = 0;
  let i = 0
  let j = 0
  let k = 0
  while (i < 10) {
      while (j <10) {
          while (k <10) {
              if (j > i && k > j) {
                  tab[index] = i + ' ' + j + ' ' + k;
                  index++;
              }
              k++
          }
          j++
      }
      i++
  }
  return tab;
}