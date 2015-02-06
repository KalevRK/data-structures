var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  // if this.value === target
  //   return true
  // else
  //   run contains on all children
  //   iterating through children array
  // return false

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
// Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)
