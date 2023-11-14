"use client";
import { Dialog } from "@/components/ui/dialog";
import { ModalIDs } from "@/modal/modals.atom";
import { useModal } from "@/modal/modals.hook";
import type { ReactNode } from "react";

type ModalBaseProps = {
  id: ModalIDs;
  children: ReactNode;
};
export const ModalBase = ({ id, children }: ModalBaseProps) => {
  const { setOpen, isOpen, setClose } = useModal(id);
  const onOpenChange = (value: boolean) => (value ? setOpen() : setClose());

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {children}
      </Dialog>
    </>
  );
};
