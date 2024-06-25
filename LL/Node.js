class LinkedListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const printLL = (root) => {
  if (root == null) return;
  while (root) {
    console.log(root.val);
    root = root.next;
  }
};
const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(44);
const node3 = new LinkedListNode(3);
const node2 = new LinkedListNode(22);
const node1 = new LinkedListNode(1);

node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

//printLL(node1)  // 1 -> 22 -> 3 -> 44 -> 5 -> head

const code = (head, k) => {
  if (head === null || head.next === null || k === 0) return head;

  let temp = head;
  let length = 1;
  while (true) {
    length++;
    if (!head.next.next) {
      head.next.next = temp;
      break;
    }
    head = head.next;
  }
   console.log(length);
   //if (k % length === 0) return temp;
  let temp2 = null;
  for (let i = 0; i < length - (k % length); i++) {
    if (i === length - (k % length) - 1) {
      temp2 = temp.next;
      temp.next = null;
      return temp2;
    }
    temp = temp.next;
  }
};
//console.log(code(node1, 2));
printLL(code(node1, 2));

// let A = new LinkedListNode(1)
// let B = new LinkedListNode(0);
// let C = new LinkedListNode(0); //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// let G = new LinkedListNode(0);
// let H = new LinkedListNode(0);
// let I = new LinkedListNode(0);
// let J = new LinkedListNode(0);
// let K = new LinkedListNode(0);
// let L = new LinkedListNode(0);
// let M = new LinkedListNode(0);
// let N = new LinkedListNode(0);
// let O = new LinkedListNode(0);
// let P = new LinkedListNode(0);
// let Q = new LinkedListNode(0);
// let R = new LinkedListNode(0); //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// let S = new LinkedListNode(0);
// let T = new LinkedListNode(0);
// let U = new LinkedListNode(0);
// let V = new LinkedListNode(0);
// let W = new LinkedListNode(0);
// let X = new LinkedListNode(0);
// let Y = new LinkedListNode(0);
// let Z = new LinkedListNode(0);
// let B1 = new LinkedListNode(0);
// let C1 = new LinkedListNode(0);
// let G1 = new LinkedListNode(0);
// let H1 = new LinkedListNode(0);
// let I1 = new LinkedListNode(0);
// let J1 = new LinkedListNode(0);
// let K1 = new LinkedListNode(1);

// A.next = B;
// B.next = C
// C.next = G;
// G.next = H;
// H.next = I;
// I.next = J;
// J.next = K;
// K.next = L;
// L.next = M;
// M.next = N;
// N.next = O;
// O.next = P;
// P.next = Q;
// Q.next = R;
// R.next = S;
// S.next = T;
// T.next = U;
// U.next = V;
// V.next = W;
// W.next = X;
// X.next = Y;
// Y.next = Z;
// Z.next = B1;
// B1.next = C1;
// C1.next = G1;
// G1.next = H1;
// H1.next = I1;
// I1.next = J1;
// J1.next = K1;

// let D = new LinkedListNode(5);
// let E = new LinkedListNode(6);
// let F = new LinkedListNode(4);
// D.next = E;
// E.next = F

// // 243  ---> 342
// // 564  ---> 465
// //          807   ---> 708   --->

// const add2LL = (ll1, ll2) => {
//     if (ll1 === null || ll2 === null) return

//     let ll1_total = ""
//     let ll2_total = ""

//     while (ll1) {
//         ll1_total += ll1.val
//         ll1 = ll1.next
//     }
//     while (ll2) {
//       ll2_total += ll2.val;
//       ll2 = ll2.next;
//     }
//     const reversed_ll1_total = BigInt(ll1_total.split('').reverse((a,b)=>a-b).join(''))
//     const reversed_ll2_total = BigInt(ll2_total.split("").reverse((a, b) => a - b).join(''));
//     const total = reversed_ll1_total + reversed_ll2_total;
//     console.log(reversed_ll1_total);
//     let totalRev = (total + "").split('')
//     const stack = []
//     for (let i = 0; i < totalRev.length; i++){
//         const node = new LinkedListNode(totalRev[i])
//         if (stack.length !== 0) {
//             node.next = stack[stack.length-1]
//         }
//         stack.push(node)
//     }
//     return stack[stack.length-1]
// }

// // printLL(A)
// // printLL(D)
// const dd = add2LL(A, D)
// printLL(dd)
