var slice = Array.prototype.slice

function logger(namespace) {
    // function printing(){
    //   return (namespace+param.toString());
    // }

    return function(){
      console.log.apply(console, [namespace].concat(slice.call(arguments)));
    }
}

module.exports = logger
