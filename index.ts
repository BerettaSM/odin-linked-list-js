import { LinkedList } from "./LinkedList";


const list = new LinkedList<number>();

list.append(3);
list.append(4);
list.prepend(2);
list.prepend(1);

console.log({ head: list.head, tail: list.tail, size: list.size })
console.log(list.toString());

console.log(list.find(3))
console.log(list.contains(2));

console.log(list.insertAt(47, 2));

console.log(list.shift())

console.log({ head: list.head, tail: list.tail, size: list.size })
console.log(list.toString());

