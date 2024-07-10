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

    }

    pop(): Nullable<T> {
        return null;
    }

    contains(value: T) {

    }

    find(value: T) {

    }

    at(index: number) {

    }

    insertAt(value: T, index: number) {

    }

    removeAt(index: number) {

    }
}

