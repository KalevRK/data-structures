describe('tree', function() {
  var tree;

  var Callback = function() {
    var results = [];
    var fn = function(element) {
      results.push(element);
    }
    fn.results = results;

    return fn;
  };

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have children aware of their parent', function() {
    tree.addChild(5);
    expect(tree.children[0].parent.value).to.equal(undefined);
    tree.children[0].addChild(27);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should break parent child relationships', function() {
    tree.addChild(5);
    tree.children[0].addChild(27);
    tree.children[0].addChild(12);
    var target = tree.children[0].children[1].removeFromParent();
    expect(_.contains(tree.children[0].children, target)).to.equal(false);
    expect(target.parent).to.equal(null);
  });

  it('should traverse tree and invoke callback for each node', function() {
    var callback = Callback();
    tree.addChild(5);
    tree.children[0].addChild(27);
    tree.children[0].addChild(12);
    tree.children[0].traverse(callback);
    expect(callback.results).to.eql([5,27,12]);
  });



});
