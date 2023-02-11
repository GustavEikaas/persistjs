import { expect, test, vi } from "vitest";
import { PersistorClient } from "../src";

test("should notify observers of changes to the store", () => {
  const client = new PersistorClient();
  const observer = vi.fn();
  client.store.observe("test", observer);
  client.store.set("test", 1);
  expect(observer).toBeCalledTimes(1);
});

test("should notify observers of changes to the store", () => {
  const client = new PersistorClient();
  const observer = vi.fn();
  client.store.observe("test", observer);
  client.store.remove("test");
  expect(observer).toBeCalledTimes(1);
});

test("should not notify observer when unsubscribed", () => {
  const client = new PersistorClient();
  const observer = vi.fn();
  const unsubscribe = client.store.observe("test", observer);
  unsubscribe();
  client.store.set("test", 1);
  expect(observer).toBeCalledTimes(0);
});
test("observer should be notified immediately if option enabled", () => {
  const client = new PersistorClient();
  const observer = vi.fn();
  client.store.observe("test", observer, {
    callImmediate: true,
  });
  expect(observer).toBeCalledTimes(1);
});
