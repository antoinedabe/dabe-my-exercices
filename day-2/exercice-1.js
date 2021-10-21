export const  my_alpha_reverse = (str) => {
  let i = 0
  let res = ''
  let len = -1
  while (str[i] != undefined)
  {
    len ++
    i++
  }
  while (len != -1)
  {
    res+=str[len]
    len--
  }
  return res
};