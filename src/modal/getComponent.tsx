import { type ComponentType } from "react";
import { loadComponent } from "./modals.atom";

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
