var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {

};

//worth some hi-chews on completion
BinarySearchTree.prototype.breadthFirstLog = function(callback){

}

//worth lots of hi-chews
BinarySearchTree.prototype.rebalanceTree = function(){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
