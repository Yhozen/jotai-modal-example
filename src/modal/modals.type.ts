import type { ModalIDs, ModalsInitialState } from "./modals.atom";

export type EmptyObject = Record<never, never>;

export type ModalData<
  T extends EmptyObject = EmptyObject,
  ID extends string = string
> =
  | {
      id: ID;
      open: true;
      data: T;
    }
  | {
      id: ID;
      open: false;
      data: null | T;
    };

type InferData<T> = T extends ModalData<infer R> ? R : never;

export type InferDataFromID<T extends ModalIDs> = InferData<
  ModalsInitialState[T]
>;
