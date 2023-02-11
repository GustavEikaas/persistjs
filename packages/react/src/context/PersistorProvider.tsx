import { createContext, ReactNode } from "react";
import { PersistorClient } from "persistjs-core";

export type PersistorProviderProps = {
  client: PersistorClient;
  children: ReactNode;
};

export function PersistorProvider({
  children,
  client,
}: PersistorProviderProps) {
  return (
    <PersistorContextProvider.Provider value={client}>
      {children}
    </PersistorContextProvider.Provider>
  );
}

export const PersistorContextProvider = createContext<PersistorClient | null>(
  null
);
