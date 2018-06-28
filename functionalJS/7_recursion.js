function reduce(arr, fn, initial){

  var arrayDup = arr.slice(), i = 0;

    return (function recursiveReduce(arrayDup, fn, initial) {
      return arrayDup.length ? recursiveReduce(arrayDup, fn, fn(initial, arrayDup.shift()), i++, arr) : initial;
    }(arrayDup, fn, initial));

}


module.exports = reduce;
