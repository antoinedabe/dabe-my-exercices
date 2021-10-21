export const my_display_comb = () => {
  const tab = [];
  let i = 0
  let j = 0
  while (i < 100) {
      while (j < 100) {
          tab[i * 100 + j] = i + ' ' + j;
          j++
      }
      i++
  }
  return tab;
}