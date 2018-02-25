module.exports = function getZerosCount(number, n) {
  function prostoe(n) {
    var j = 0, i = 2, a = [], array = [];
    while(i <= n) {
      if((n%i == 0) ) {
        a[j] = i;
        j++;
        n/=i;
      }
      else {
        i++;
      }
    }
    //a[j]=i;
  //  return a;
    array[0] = a[0];
    array[1] = 1;
    for(var i=1; i < a.length; i++) {
      if(a[i] == array[0]) {
        array[1] += 1;
      }
      else if(a[i] > array[0]) {
        array[0] = a[i];
        array[1] = 1;
      }
    }
    return array;
  }
  var count=0, array = prostoe(n);
  while(number >= array[0]) {
    number = Math.floor(number/array[0]);
    count = count + number;
  }
  return Math.floor(count/array[1]);
}
