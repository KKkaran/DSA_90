class LinkedListNode{
    constructor(val, pointer) {
        this.val = val === undefined ? 0 : val
        this.pointer = pointer === undefined ? null : pointer
    }
}

let A = new LinkedListNode(1)
let B = new LinkedListNode(0);
let C = new LinkedListNode(0); //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let G = new LinkedListNode(0);
let H = new LinkedListNode(0);
let I = new LinkedListNode(0);
let J = new LinkedListNode(0);
let K = new LinkedListNode(0);
let L = new LinkedListNode(0);
let M = new LinkedListNode(0);
let N = new LinkedListNode(0);
let O = new LinkedListNode(0);
let P = new LinkedListNode(0);
let Q = new LinkedListNode(0);
let R = new LinkedListNode(0); //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let S = new LinkedListNode(0);
let T = new LinkedListNode(0);
let U = new LinkedListNode(0);
let V = new LinkedListNode(0);
let W = new LinkedListNode(0);
let X = new LinkedListNode(0);
let Y = new LinkedListNode(0);
let Z = new LinkedListNode(0);
let B1 = new LinkedListNode(0);
let C1 = new LinkedListNode(0);
let G1 = new LinkedListNode(0);
let H1 = new LinkedListNode(0);
let I1 = new LinkedListNode(0);
let J1 = new LinkedListNode(0);
let K1 = new LinkedListNode(1);

A.pointer = B;
B.pointer = C
C.pointer = G;
G.pointer = H;
H.pointer = I;
I.pointer = J;
J.pointer = K;
K.pointer = L;
L.pointer = M;
M.pointer = N;
N.pointer = O;
O.pointer = P;
P.pointer = Q;
Q.pointer = R;
R.pointer = S;
S.pointer = T;
T.pointer = U;
U.pointer = V;
V.pointer = W;
W.pointer = X;
X.pointer = Y;
Y.pointer = Z;
Z.pointer = B1;
B1.pointer = C1;
C1.pointer = G1;
G1.pointer = H1;
H1.pointer = I1;
I1.pointer = J1;
J1.pointer = K1;

let D = new LinkedListNode(5);
let E = new LinkedListNode(6);
let F = new LinkedListNode(4);
D.pointer = E;
E.pointer = F

// 243  ---> 342
// 564  ---> 465
//          807   ---> 708   ---> 

const printLL = (root) => {
    if(root == null) return
    while (root) {
        console.log(root.val)
        root = root.pointer
    }
}


const add2LL = (ll1, ll2) => {
    if (ll1 === null || ll2 === null) return 

    let ll1_total = ""
    let ll2_total = ""

    while (ll1) {
        ll1_total += ll1.val
        ll1 = ll1.pointer
    }
    while (ll2) {
      ll2_total += ll2.val;
      ll2 = ll2.pointer;
    }
    const reversed_ll1_total = BigInt(ll1_total.split('').reverse((a,b)=>a-b).join(''))
    const reversed_ll2_total = BigInt(ll2_total.split("").reverse((a, b) => a - b).join(''));
    const total = reversed_ll1_total + reversed_ll2_total;
    console.log(reversed_ll1_total);
    let totalRev = (total + "").split('')
    const stack = []
    for (let i = 0; i < totalRev.length; i++){
        const node = new LinkedListNode(totalRev[i])
        if (stack.length !== 0) {
            node.pointer = stack[stack.length-1]
        }
        stack.push(node)
    }
    return stack[stack.length-1]
}



// printLL(A)
// printLL(D)
const dd = add2LL(A, D)
printLL(dd)