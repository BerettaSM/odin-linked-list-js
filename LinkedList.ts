type Nullable<T> = T | null;

class ListNode<T> {
    constructor(
        public value: T,
        public next: Nullable<ListNode<T>> = null
    ) {}
}

