import { useContext } from "react";
import { PersistorContextProvider } from "../context";

export function usePersistorContext() {
  const context = useContext(PersistorContextProvider);
  if (!context) {
    throw new Error("Component not wrapped in PersistorProvider", {
      cause: "Context returned null",
    });
  }
  return context;
}
