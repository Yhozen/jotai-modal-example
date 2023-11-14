import { type ComponentType } from "react";
import { loadComponent } from "./modals.atom";
import { EmptyObject, ModalData } from "./modals.type";

const isValidFilename = (
  filename: string
): filename is keyof typeof loadComponent => {
  return Object.hasOwn(loadComponent, filename);
};

const Empty = () => <></>;

export const getComponent = (filename: string): ComponentType => {
  if (!isValidFilename(filename)) return Empty;

  const component = loadComponent[filename];

  return component;
};

export const createModalInitialState = <
  Data extends EmptyObject,
  ID extends string
>(
  id: ID
) => {
  return {
    id,
    open: false,
    data: null,
  } as ModalData<Data, ID>;
};
