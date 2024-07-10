type Nullable<T> = T | null;

class ListNode<T> {
    constructor(
        public value: T,
        public next: Nullable<ListNode<T>> = null
    ) {}
}

export class LinkedList<T> {
    private _head: Nullable<ListNode<T>> = null;
    private _tail: Nullable<ListNode<T>> = null;
    private length = 0;

    get head() {
        return this._head?.value ?? null;
    }

    get tail() {
        return this._tail?.value ?? null;
    }

    get size() {
        return this.length;
    }

    append(value: T) {
        const node = new ListNode(value);
        if(!this._tail) {
            this._head = this._tail = node;
        }
        else{
            this._tail = this._tail.next = node;
        }
        this.length++;
        return this;
    }

    prepend(value: T) {
        const node = new ListNode(value);
        if(!this._head) {
            this._head = this._tail = node;
        }
        else{
            node.next = this._head;
            this._head = node;
        }
        this.length++;
        return this;
    }

    pop(): Nullable<T> {
        const last = this._tail;
        if(last === null) return null;
        if(this._head === last) {
            this._head = this._tail = null;
        }
        else {
            const prev = this.get(this.length - 2)!;
            prev.next = null;
            this._tail = prev;
        }
        this.length--;
        return last.value;
    }

    contains(value: T) {

    }

    find(value: T) {

    }

    at(index: number) {
        return this.get(index)?.value ?? null;
    }

    insertAt(value: T, index: number) {

    }

    removeAt(index: number) {

    }

    toString() {
        if(this.length === 0) return '[ Empty ]';
        const q = [];
        let node = this._head;
        while(node !== null) {
            q.push(`( ${node.value} )`);
            node = node.next;
        };
        q.push('null');
        return q.join(' -> ');
    }

    private get(index: number) {
        if(index < 0 || index >= this.length) return null;
        if(index === this.length - 1) return this._tail;
        let node = this._head;
        while(index > 0) {
            node = node!.next;
            index--;
        }
        return node;
    }
}

