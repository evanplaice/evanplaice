/**
 * LRU (Least Recently Used) Cache
 */
export class LRUCache {
  capacity;
  values;
  dequeue;

  /**
   * @param {number} capacity
   */
  constructor (capacity) {
    this.capacity = capacity;
    this.values = new Map();
    this.dequeue = [];
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get (key) {
    const index = this.dequeue.indexOf(key);
    if (index === -1) {
      return index;
    }
    this.dequeue.splice(index, 1);
    this.dequeue.unshift(key);
    return this.values.get(key);
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put (key, value) {
    if (this.get(key) !== -1) {
      this.values.set(key, value);
      return;
    }
    this.dequeue.unshift(key);
    this.values.set(key, value);
    if (this.dequeue.length > this.capacity) {
      const removeKey = this.dequeue.pop();
      this.values.delete(removeKey);
    }
  }
}
