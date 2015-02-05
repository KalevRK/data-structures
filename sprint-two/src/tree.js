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
    _.each(this.children, function(element) {
      debugger;
      element.contains(target);
    });
  }
  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
