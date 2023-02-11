import { useState } from "react";
import { useEntryObserver } from "./useEntryObserver";
import { usePersistorContext } from "./usePersistorContext";

export function useEntry<T>(key: string): T | undefined {
  const context = usePersistorContext();
  const [val, setVal] = useState<T | undefined>(context.store.get(key));
  useEntryObserver(key, setVal);

  return val;
}
