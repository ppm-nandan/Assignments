function repeat(operation, num) {
      // Modify this so it doesn't cause a stack overflow!
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    function trampoline(fn) {
      // You probably want to implement a trampoline!
      // for(var i =0; i<num; i++){
      //   return trampoline(fn);
      // }
    }

    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
      trampoline(operation);
      return repeat(operation, num)
    }
