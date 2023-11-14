/* eslint-disable max-lines */
import { type ComponentType } from "react";
import { atom } from "jotai";
import dynamic from "next/dynamic";
import type { ValueOf } from "type-fest";
import { createElement } from "react";

const createModalInitialState = <Data extends EmptyObject, ID extends string>(
  id: ID
) => {
  return {
    id,
    open: false,
    data: null,
  } as ModalData<Data, ID>;
};

type SuccessfulModalData = {
  title: string;
  description: string;
  buttons: { close: string; confirm: string };
  confirmAction?: () => void;
};

const MODALS_INITIAL_STATE = {
  /*
  "success-modal": createModalInitialState<
    SuccessfulModalData,
    "success-modal"
  >("success-modal"),*/
  "example-modal": createModalInitialState("example-modal"),
} as const satisfies Record<string, ModalData>;

type EmptyObject = Record<never, never>;

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

export type ModalsInitialState = typeof MODALS_INITIAL_STATE;

export type ModalIDs = ValueOf<ModalsInitialState>["id"];

export const modalAtom = atom(MODALS_INITIAL_STATE);

export const openedModalsAtom = atom((get) =>
  Object.values(get(modalAtom)).filter((item) => item.open)
);

const SomeComponentSoThisDoesntBreak = () => createElement("div");

export const loadComponent = {
  /*
  "success-modal": dynamic(() =>
    import("@/components/modals/success-modal/success-modal.modal").then(
      ({ SuccessModal }) => SuccessModal
    )
  ),*/
  "example-modal": SomeComponentSoThisDoesntBreak,
} as const satisfies Record<ModalIDs, ComponentType>;
