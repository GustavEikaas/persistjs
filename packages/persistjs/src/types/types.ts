export type ObserverHandler<T> = (data: T | undefined) => void;

export type Observer = {
  key: string;
  observer: ObserverHandler<any>;
};

export type Store = {
  remove: (key: string) => void;
  set: <T>(key: string, data: T) => void;
  get: <T>(key: string) => T | undefined;
  observe: <T>(key: string, observer: ObserverHandler<T>) => VoidFunction;
};

export type ObserverOptions = {
  /** Call the observer immediately with the latest value */
  callImmediate?: boolean;
};
