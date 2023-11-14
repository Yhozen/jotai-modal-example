"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useModalBindings } from "@/modal/modals.hook";
import { useState } from "react";

export function OpenStateModal() {
  const { setOpen } = useModalBindings("with-state-modal");
  const [value, setValue] = useState("42");
  return (
    <>
      <Label htmlFor="name" className="text-right">
        some value
      </Label>
      <Input
        id="name"
        defaultValue={42}
        className="col-span-3"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="outline"
        onClick={() => setOpen({ value: Number(value) })}
        className="w-full my-2"
      >
        Open modal with state
      </Button>
    </>
  );
}
