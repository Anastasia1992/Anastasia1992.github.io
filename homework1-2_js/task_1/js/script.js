function pow(x, n) {
  x = Math.round(x);
  n = Math.round(n);
  var result = 1;

  for (var i = 0; i < Math.abs(n); i++) {
    result *= x;
  }
  if (n < 0) {
    result = 1 / result;
  }
  return result;
}

var x = prompt('Enter number');
var n = prompt('Enter power');

console.log('result = ', pow(x, n));
