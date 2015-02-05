var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.count = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

// push
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

// pop
stackMethods.pop = function() {
  this.count && this.count--;
  var value = this.storage[this.count];
  delete this.storage[this.count];
  return value;
};

// size
stackMethods.size = function() {
  return this.count;
};


