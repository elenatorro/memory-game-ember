export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');

  Array.prototype.sample = function (amount = 1) {
    return this.shuffle().slice(0, amount);
  };

  Array.prototype.shuffle = function() {
    for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x){}
    return this;
  };

}

export default {
  name: 'array',
  initialize
};
