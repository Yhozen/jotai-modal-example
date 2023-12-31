"use client";
import { Button } from "@/components/ui/button";

import { useModalBindings } from "@/modal/modals.hook";

export function OpenExampleModal() {
  const { setOpen } = useModalBindings("example-modal");
  return (
    <>
      <Button variant="outline" onClick={() => setOpen()} className="w-full">
        Open Example modal
      </Button>
    </>
  );
}
