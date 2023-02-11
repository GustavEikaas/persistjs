---
title: "Persistor client"
---

The persistor client is an object store designed to hold the collective state of all it`s subscribers.

```ts
type Observer<T> = (data: T) => void;

type Store = {
  //private
  // entries: Map<string, unknown>
  remove: (key: string) => void;
  set: (key: string, data: unknown) => void;
  get: (key: string) => unknown;
  observe: (key: string, handler: Observer<unknown>) => VoidFunction;
};

//Class
type PersistorClient = {
  store: Store;
};
```
