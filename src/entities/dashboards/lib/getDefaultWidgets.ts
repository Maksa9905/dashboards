import { Widget } from "../model/types";

export const getDefaultWidgets = (): Widget[] => {
  return JSON.parse(localStorage.getItem("widgets") || "[]");
};
