module.exports = function getZerosCount(number, base) {

  let str = factor(base);
  let finalResult = [];
  let arr = str.split('*');
  let count = 1;

  // get counter and push into finalResult
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i-1]) {
      count = 1;
      finalResult.push(HPdevide(number, arr[i])); 
    }
    if (arr[i] == arr[i+1]) {
      count++;
      finalResult.push(Math.floor(HPdevide(number, arr[i]) / count));
    } 
  }

  // divide number by the exponent
  function HPdevide(number1, number2) {
    let i = 1;
    let sum = 0;
    while (Math.floor(number1 / Math.pow(number2, i)) > 0) {
      sum = sum + Math.floor(number1 /  Math.pow(number2, i));
      i++;
    }
    return sum;
  }

  // factorize base number, return string 
  function factor(n) {
    if (isNaN(n) || !isFinite(n) || n%1 != 0 || n == 0) return ''+ n;
    if (n < 0) return '-' + factor(-n);
    let minFactor = leastFactor(n);
    if (n == minFactor) return ''+ n;
    return minFactor + '*' + factor(n / minFactor);
  }

  function leastFactor(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n == 0) return 0;  
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 == 0) return 2;  
    if (n % 3 == 0) return 3;  
    if (n % 5 == 0) return 5;  
    let m = Math.sqrt(n);
    for (let i = 7; i <= m; i += 30) {
      if (n % i == 0) return i;
      if (n % (i + 4) == 0) return i + 4;
      if (n % (i + 6) == 0) return i+6;
      if (n % (i + 10) == 0) return i + 10;
      if (n % (i + 12) == 0) return i + 12;
      if (n % (i + 16) == 0) return i + 16;
      if (n % (i + 22) == 0) return i + 22;
      if (n % (i + 24) == 0) return i + 24;
    }
     return n;
  }

  return Math.min( ...finalResult);
  
}