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
import { useModalBindings } from "@/modal/modals.hook";

const modalId = "example-modal" as const satisfies ModalIDs;
export function SomeModal() {
  const { setClose } = useModalBindings(modalId);
  return (
    <ModalBase id={modalId}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Example modal</DialogTitle>
          <DialogDescription>Wow!</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button size="sm" className="px-3" onClick={setClose}>
            <span>Close it with binding</span>
          </Button>
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
