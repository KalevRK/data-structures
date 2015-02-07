var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
  node.parent = this;
};

treeMethods.removeFromParent = function() {
  for (var i=0; i<this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i,1);
      break;
    }
  }
  this.parent = null;
  return this;
};

// Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)
// where n is # of nodes in "this" tree
treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
