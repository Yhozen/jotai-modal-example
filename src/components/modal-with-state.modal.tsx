"use client";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalBase } from "./modal-base";
import { ModalIDs } from "@/modal/modals.atom";
import { useModal, useModalBindings } from "@/modal/modals.hook";

const modalId = "with-state-modal" as const satisfies ModalIDs;
export function SomeModal() {
  const { data } = useModal(modalId);
  return (
    <ModalBase id={modalId}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Modal with state</DialogTitle>
          <DialogDescription>Extra wow!</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <p> value is: {data.value}</p>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </ModalBase>
  );
}
