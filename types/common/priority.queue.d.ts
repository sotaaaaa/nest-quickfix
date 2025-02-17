export declare class PriorityQueue<T> {
    private items;
    enqueue(item: T, priority: number): void;
    dequeue(): T | undefined;
    isEmpty(): boolean;
}
