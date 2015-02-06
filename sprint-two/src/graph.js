

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};
// Complexity = O(1)


Graph.prototype.contains = function(node){
  return _.indexOf(this.nodes, node) !== -1;
};
// Complexity = O(n)


Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    this.nodes.splice(_.indexOf(this.nodes, node), 1);
    this.edges = _.filter(this.edges, function(element) {
      return _.indexOf(element, node) === -1;
    });
  }
};
// Complexity = O(2n + m) -> O(n + m)
// n = # of nodes, m = # of edges


Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;

  _.each(this.edges, function(element) {
    if (_.contains(element, fromNode) && _.contains(element, toNode)) {
      result = true;
    }
  });

  return result;
};
// Complexity = O(n)


Graph.prototype.addEdge = function(fromNode, toNode){
  if (_.contains(this.nodes, fromNode) && _.contains(this.nodes, toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};
// Complexity = O(n)


Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexFromTo = _.indexOf(this.edges, [fromNode, toNode]);
  var indexToFrom = _.indexOf(this.edges, [toNode, fromNode]);

  if (indexFromTo !== -1) {
    this.edges.splice(indexFromTo, 1);
  } else if (indexToFrom !== -1) {
    this.edges.splice(indexToFrom, 1);
  }
};
// Complexity = O(n)


Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb(node);
  });
};
// Complexity = O(n)


/*
 * Complexity: What is the time complexity of the above functions?
 */



