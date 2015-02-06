var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionArray = this._storage.get(i);

  if (Array.isArray(collisionArray)) {
    collisionArray.push([k,v]);
  } else {
    this._storage.set(i,[[k,v]]);
  }

  this._size++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionArray = this._storage.get(i);

  for (var tuplei = 0; tuplei < collisionArray.length; tuplei++) {
    if(collisionArray[tuplei][0] === k) {
      return collisionArray[tuplei][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisionArray = this._storage.get(i);

  for (var tuplei = 0; tuplei < collisionArray.length; tuplei++) {
    if (collisionArray[tuplei][0] === k) {
      collisionArray.splice(tuplei,1);
      this._size--;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
