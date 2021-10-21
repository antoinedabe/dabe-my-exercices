export const  my_display_forever_42 = (nbr) => {
  if (typeof nbr === 'number' && nbr != 42)
  {
    return nbr
  }
  else{
    return 42
  }
};