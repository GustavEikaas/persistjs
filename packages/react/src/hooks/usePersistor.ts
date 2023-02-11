import { useCallback, useMemo } from "react";
import { usePersistorContext } from "./usePersistorContext";

export function usePersistor<T>(key: string) {
  const client = usePersistorContext();

  const initialState = useMemo(() => client.store.get<T>(key), [key, client]);
  const commit = useCallback(
    (value: T) => client.store.set(key, value),
    [key, client]
  );

  return {
    initialState,
    commit,
    reset: () => client.store.remove(key),
  };
}
