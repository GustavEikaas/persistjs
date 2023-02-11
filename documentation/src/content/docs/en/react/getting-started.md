---
title: "Getting started"
---

Import the provider and instantiate a client

## Setup

```tsx
import { PersistorClient, PersistorProvider } from "persistorjs/react";

const persistorClient = new PersistorClient();

function App() {
  return (
    <PersistorProvider client={persistorClient}>
      <Component />
    </PersistorProvider>
  );
}
```

## Use

In the example below the grid component can mount and unmount without losing it`s current state.

```ts
import { usePersistor } from "persistorjs/react";

function Grid() {
  const { initialState, commit } = usePersistor("grid");

  return <Grid options={initialState} onChange={commit} />;
}
```
