export const  my_string_is_number = (str) => {
  let i = 0
  let len = 0
  while (str[i] != undefined )
  {
    console.log(str[i])
    if (typeof str[i] == 'number')
    {
      return true
    }
    len ++
    i++
  }
  return false
};

console.log(my_string_is_number('heuehfh3e'))