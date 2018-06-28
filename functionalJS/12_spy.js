function Spy(target, method) {
  var oldMethod = target[method],
      spy = { count: 0 };

  target[method] = function() {
    spy.count++;
    return oldMethod.apply(this, arguments);
  }

  return spy;
}

module.exports = Spy;
