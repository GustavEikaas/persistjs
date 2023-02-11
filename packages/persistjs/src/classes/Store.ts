import {
  ObserverHandler,
  Store as IStore,
  ObserverOptions,
  Observer,
} from "../types";

export class Store implements IStore {
  /**
   * Set new data for an entry
   * @param key - Key associated with the data
   * @param data - Data to store
   */
  set = (key: string, data: unknown) => {
    this.#entries.set(key, data);
    this.#notify(key);
  };

  /**
   * Retrieves an entry for a given key
   */
  get = <T>(key: string) => this.#entries.get(key) as T | undefined;

  /**
   * Remove an entry
   * @param key - key to be removed
   */
  remove = (key: string) => {
    this.#entries.delete(key);
    this.#notify(key);
  };

  /**
   * Be notified of changes to a specific entry
   * @param key - Key to be notified of
   * @param observer - Function to be invoked when changes occurs
   * @returns A method to unsubscribe
   */
  observe = <T>(
    key: string,
    observer: ObserverHandler<T>,
    observerOptions?: ObserverOptions
  ) => {
    this.#observers.push({ observer: observer, key });

    if (!!observerOptions?.callImmediate) {
      observer(this.get<T>(key));
    }

    return () => {
      this.#removeObserver(observer);
    };
  };

  /** Persist entries */
  #entries = new Map<string, unknown>();

  /** Observers */
  #observers: Observer[] = [];

  /** Notify observers of changes in entries */
  #notify = (key: string) => {
    this.#observers
      .filter((obs) => obs.key === key)
      .forEach(({ observer }) => observer(this.#entries.get(key)));
  };

  /**
   * Removes an observer using the function identity
   * @param identity - Observer callback function
   */
  #removeObserver = (identity: ObserverHandler<any>) => {
    this.#observers.splice(
      this.#observers.findIndex((s) => s.observer === identity),
      1
    );
  };
}
