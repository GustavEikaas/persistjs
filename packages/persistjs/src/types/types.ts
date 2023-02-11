export type Observer<T> = (data: T | undefined) => void;

export type Store = {
  remove: (key: string) => void;
  set: <T>(key: string, data: T) => void;
  get: <T>(key: string) => T | undefined;
  observe: <T>(key: string, observer: Observer<T>) => VoidFunction;
};

export type ObserverOptions = {
  /** Call the observer immediately with the latest value */
  callImmediate?: boolean;
};
