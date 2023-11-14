"use client";
import { useMemo } from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { modalAtom, ModalIDs } from "./modals.atom";
import type { InferDataFromID } from "./modals.type";

export const useModalBindings = <ID extends ModalIDs>(id: ID) => {
  type Data = InferDataFromID<ID>;
  type SetOpen = keyof Data extends never ? () => void : (data: Data) => void;

  const setModal = useSetAtom(modalAtom);

  const { setOpen, setClose } = useMemo(() => {
    const setOpen: SetOpen = (val: unknown = {}) =>
      setModal((modal) => ({
        ...modal,
        [id]: { ...modal[id], data: val, open: true },
      }));

    return {
      setOpen,
      setClose: () =>
        setModal((modal) => ({
          ...modal,
          [id]: { ...modal[id], open: false, data: null },
        })),
    };
  }, [id, setModal]);

  return {
    setOpen,
    setClose,
  };
};

export const useModal = <ID extends ModalIDs>(id: ID) => {
  const modal = useAtomValue(modalAtom);

  type Data = InferDataFromID<ID>;

  const { setClose, setOpen } = useModalBindings(id);

  return {
    isOpen: modal[id].open,
    data: modal[id].data as Data,
    setOpen,
    setClose,
  };
};
