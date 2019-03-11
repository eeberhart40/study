//root: top level node
    //-has no parents

//binary tree: no more than 2 children for any node

//Balanced Tree
//  -given the root of a tree
//  -the left subtree and right subtrees MUST differ in height by at most 1
//  -AND the left subtree is balanced
//  -AND the right subtree is balanced

//BST
//  -given the root of a tree
//  -all vals in the left subtree are < 
// - all vals in the right subtre are >=
//  AND the left subtree is a BST
// - AND the right subtree is a BST
// - an empty tree is a BST

//empty tree has a height of -1
//tree with only one node has height of 0

//why are balanced trees good?
// -the height of a balanced tree is small
// -binary searh in the worst case will travel the full height of the tree
// -binary search will take 0(n), where h = height
//-a balanced tree has height of log(n), where n = # nodes

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root=this.root) {
        debugger
        if(this.root === null) {
            this.root = new Node(val);
        }
        //if the val is less, go left
        //otherwise go right
        if( val < root.val) {
            if(root.left === null) {
                //if the left tree is empty, then add it here
                root.left = new Node(val);
            }   else {
            //otherwise its nonempty, so travel to the left subtree and insert the
            this.insert(val, root.left);
            }
        } else {
            if (root.right === null) {
                root.right = new Node(val);
            } else {
                this.insert(val, root.right);
            }
        }
    
    }

    inOrderPrint(root = this.root) {
        if  (root === null) return;

        this.inOrderPrint(root.left);
        console.log(root.val);
        this.inOrderPrint(root.right);
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.root);