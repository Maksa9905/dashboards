import { Widget } from "../model/types";

export const saveToStorage = (widgets: Widget[]) => {
  localStorage.setItem("widgets", JSON.stringify(widgets));
};
