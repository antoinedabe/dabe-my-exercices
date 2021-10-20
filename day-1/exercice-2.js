import { my_display_alpha } from "./exercice-1.js";

export const  my_display_alpha_reverse = () => {
  let a = ''
  a = my_display_alpha()
  let b= ''
  let i = 25
  while (i!= -1)
  {
    b+=a[i]
    i--
  }
  return b
};