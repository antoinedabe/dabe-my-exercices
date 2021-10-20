export const  my_size_alpha = (str) => {
  let i = 0
  while (typeof str[i] != "undefined")
  {
    if (typeof str[i] != "string")
  {
    return 0
  }
    i++
  }
  return i
};