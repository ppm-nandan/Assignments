
function duckCount(){
  var len = arguments.length;
  var ag = Array.prototype.slice.call(arguments);
  function count(len ){
    if(len === -1)
      return 0;
    if(ag[len] === null)
      return 0;
    return  Object.prototype.hasOwnProperty.call(ag[len], 'quack')? 1 + count(len-1): count(len-1);
  };
  return count(len-1);
}

module.exports = duckCount;
