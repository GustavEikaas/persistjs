import { useEntryObserver } from "persistjs-react";

export function Observer<T>({ entry }: { entry: string }) {
  const data = useEntryObserver<T>(entry);

  return (
    <div>
      Current value is: <>{data ?? "undefined"}</>
    </div>
  );
}
