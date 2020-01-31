import test from 'tape';
import { LRUCache } from './146-lru-cache.js';

test('LRUCache Test 1', (t) => {
  const cache = new LRUCache(2);

  cache.put(1, 1);
  cache.put(2, 2);
  t.equal(cache.get(1), 1); // returns 1
  cache.put(3, 3); // evicts key 2
  t.equal(cache.get(2), -1); // returns -1 (not found)
  cache.put(4, 4); // evicts key 1
  t.equal(cache.get(1), -1); // returns -1 (not found)
  t.equal(cache.get(3), 3); // returns 3
  t.equal(cache.get(4), 4); // returns 4

  t.end();
});

test('LRUCache Test 2', (t) => {
  const cache = new LRUCache(1);

  cache.put(2, 1);
  t.equal(cache.get(2), 1);

  t.end();
});

test('LRUCache Test 3', (t) => {
  const cache = new LRUCache(2);

  cache.put(2, 1);
  cache.put(1, 1);
  cache.put(2, 3);
  cache.put(4, 1);
  t.equal(cache.get(1), -1);
  t.equal(cache.get(2), 3);

  t.end();
});
