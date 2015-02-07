var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

// O(log n)
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

// O(log n)
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

// O(n)
BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

//worth some hi-chews on completion
// O(n)
BinarySearchTree.prototype.breadthFirstLog = function(callback){
  var results = [this];

  var processLevel = function(nodes) {
    if (nodes.length === 0) {
      _.each(results, function(node) {
        callback(node.value);
      });
    } else {
      var childNodes= [];
      _.each(nodes, function(node) {
        node.left && childNodes.push(node.left);
        node.right && childNodes.push(node.right);
        node.left && results.push(node.left);
        node.right && results.push(node.right);
      });
      processLevel(childNodes);
    }
  };

  processLevel([this]);
};

BinarySearchTree.prototype.findMinMaxDepth = function() {

};

//worth lots of hi-chews
BinarySearchTree.prototype.rebalanceTree = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
