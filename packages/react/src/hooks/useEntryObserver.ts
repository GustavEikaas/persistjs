import { useEffect } from "react";
import { usePersistorContext } from "./usePersistorContext";

/**
 * Run a handler function when an entry changes
 * @param key - entry to observe
 */
export function useEntryObserver<T>(
  key: string,
  handler: (val: T | undefined) => void
) {
  const context = usePersistorContext();

  useEffect(() => {
    const unsubscribe = context.store.observe<T>(key, handler);
    return () => unsubscribe();
  }, [context, key, handler]);
}
