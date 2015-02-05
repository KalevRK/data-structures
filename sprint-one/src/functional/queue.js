var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;
  //debugger;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function(){
    (tail-head) && head++;
    return storage[--head];
  };

  someInstance.size = function(){
    return tail-head;
  };

  return someInstance;
};
