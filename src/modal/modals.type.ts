import type { ModalData, ModalIDs, ModalsInitialState } from "./modals.atom";

type InferData<T> = T extends ModalData<infer R> ? R : never;

export type InferDataFromID<T extends ModalIDs> = InferData<
  ModalsInitialState[T]
>;
