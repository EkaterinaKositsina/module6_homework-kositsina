const exp = (x, n) => {
  let result = 1;
  for (i = 1; i <= n; i++) {
  result = result * x;   
  }
  console.log (result)
}
exp (5, 3)