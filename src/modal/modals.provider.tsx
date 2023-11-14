"use client";
import { useAtomValue } from "jotai";

import { openedModalsAtom } from "./modals.atom";
import { ReactNode } from "react";
import { getComponent } from "./modals.utils";

export function ModalsProvider(props: { children: ReactNode }) {
  const modals = useAtomValue(openedModalsAtom);

  return (
    <>
      {modals.map((filename) => {
        const LazyComponent = getComponent(filename.id);

        return <LazyComponent key={`modal-${filename.id}`} />;
      })}
      {props.children}
    </>
  );
}
