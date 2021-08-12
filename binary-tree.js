/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    let toVisitQueue = [this.root];
    let nextLvl = (this.root.left ? this.root.left : this.root.right);
    let currDepth = 0;
    while(toVisitQueue.length){
        let current = toVisitQueue.shift();
        if(current === nextLvl){
          currDepth++
          nextLvl = (nextLvl.left ? nextLvl.left : nextLvl.right)
        }
        if(!current.left && !current.right){
          return currDepth;  
        }
        toVisitQueue.push(current.left)
        toVisitQueue.push(current.right)
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let toVisitQueue = [this.root];
    let nextLvl = (this.root.left ? this.root.left : this.root.right);
    let currDepth = 1;
    while(toVisitQueue.length){
        let current = toVisitQueue.shift();
        console.log(toVisitQueue, currDepth, nextLvl)
        if(current === nextLvl){
          currDepth++
          nextLvl = (current.left ? current.left : current.right);
        }
        if(!nextLvl && (current.left || current.right)){
          nextLvl = (current.left ? current.left : current.right);
        }
        if(current.left){
          toVisitQueue.push(current.left)
        }
        if(current.right){
          toVisitQueue.push(current.right)
        }
    }
    return currDepth
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node=this.root) {
    let currVal = node.val;
    let maxSum = node.val;
    if(node.left || node.right){
      if(node.left){
        let leftSum = this.maxSum(node.left) + currVal;
        if(leftSum > maxSum){
          maxSum = leftSum;
        }
      }
      if(node.right){
        let rightSum = this.maxSum(node.right) + currVal;
        if(rightSum > maxSum){
          maxSum = rightSum
        }
      }
    }
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let currCloser = null;
    let toVisitQueue = [this.root];
    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      if(!currCloser && current.val > lowerBound){
        currCloser = current.val;
      }
      if(current.val > lowerBound && current.val < currCloser){
        currCloser = current.val;
      }
      if(current.left){
          toVisitQueue.push(current.left)
      }
      if(current.right){
          toVisitQueue.push(current.right)
      }
    }
    return currCloser;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
