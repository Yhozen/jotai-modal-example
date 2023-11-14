/* eslint-disable max-lines */
import { type ComponentType } from "react";
import { atom } from "jotai";
import dynamic from "next/dynamic";
import type { ValueOf } from "type-fest";
import type { ModalData } from "./modals.type";
import { createModalInitialState } from "./modals.utils";

const MODALS_INITIAL_STATE = {
  /*
  "success-modal": createModalInitialState<
    SuccessfulModalData,
    "success-modal"
  >("success-modal"),*/
  "example-modal": createModalInitialState("example-modal"),
} as const satisfies Record<string, ModalData>;

export const loadComponent = {
  "example-modal": dynamic(() =>
    import("@/components/some.modal").then(({ SomeModal }) => SomeModal)
  ),
} as const satisfies Record<ModalIDs, ComponentType>;

export type ModalsInitialState = typeof MODALS_INITIAL_STATE;

export type ModalIDs = ValueOf<ModalsInitialState>["id"];

export const modalAtom = atom(MODALS_INITIAL_STATE);

export const openedModalsAtom = atom((get) =>
  Object.values(get(modalAtom)).filter((item) => item.open)
);
