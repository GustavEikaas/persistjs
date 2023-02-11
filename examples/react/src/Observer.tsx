import { useEntry, useEntryObserver } from "persistjs-react";

export function Observer<T>({ entry }: { entry: string }) {
  const data = useEntry(entry);

  return (
    <div>
      Current value is: <>{data ?? "undefined"}</>
    </div>
  );
}
