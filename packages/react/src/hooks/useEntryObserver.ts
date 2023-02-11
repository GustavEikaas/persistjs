import { useEffect, useState } from "react";
import { usePersistorContext } from "./usePersistorContext";

/**
 * Observe an entry an use it as a state
 * @param key - entry to observe
 * @returns - Entry as React state
 */
export function useEntryObserver<T>(key: string) {
  const context = usePersistorContext();
  const [val, setVal] = useState<T | undefined>(context.store.get(key));

  useEffect(() => {
    const sub = context.store.observe<T>(key, (data) => setVal(data));
    return () => sub();
  }, [context.store, key]);

  return val;
}
