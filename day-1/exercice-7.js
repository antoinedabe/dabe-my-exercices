export const  my_is_posi_neg = (nbr) => {
  let res = ''
  if(nbr < 0)
  {
    res = "NEGATIF"
  }
  else if (nbr > 0)
  {
    res = "POSITIF"
  }
  else
  {
    res = "NEUTRAL"
  }
  return res
};