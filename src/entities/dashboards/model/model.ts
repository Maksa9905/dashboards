import { createEvent, createStore, sample } from "effector";
import { Widget, WidgetListItem } from "./types";
import { getDefaultWidgets } from "../lib/getDefaultWidgets";
import { widgetsList } from "./constants";
import { Layout } from "react-grid-layout";
import { mapLayoutToWidget } from "./mappers";
import { saveToStorage } from "../lib/saveToStorage";

export const $editMode = createStore<boolean>(false);

export const $widgets = createStore<Widget[]>(getDefaultWidgets());
export const $widgetsList = createStore<WidgetListItem[]>(widgetsList);

export const addWidget = createEvent<string>();
export const removeWidget = createEvent<string>();

export const setWidgets = createEvent<Layout[]>();

export const setEditMode = createEvent<boolean>();

export const saveWidgets = createEvent();
export const resetWidgets = createEvent();

$widgets.on(addWidget, (store, id) => {
  const newWidget = $widgetsList.getState().find((widget) => widget.id === id);

  const newYPos = Math.max(...store.map((widget) => widget.yPos)) + 1;

  if (newWidget) {
    return [
      ...store,
      {
        id: newWidget.id,
        title: newWidget.title,
        width: newWidget.defaultWidth,
        height: newWidget.defaultHeight,
        xPos: 0,
        yPos: newYPos,
        static: false,
      },
    ];
  }

  return store;
});

$widgets.on(removeWidget, (store, id) =>
  store.filter((widget) => widget.id !== id)
);

$widgets.on(setWidgets, (_, layouts) => {
  const widgets = layouts.map((layout) => {
    const widget = $widgetsList
      .getState()
      .find((widget) => widget.id === layout.i);

    return mapLayoutToWidget(layout, widget?.title || "");
  });

  return widgets;
});

$editMode.on(setEditMode, (_, value) => value);
$widgets.on(saveWidgets, (widgets) => {
  saveToStorage(widgets);
});
$editMode.on(saveWidgets, () => false);

$widgets.on(resetWidgets, () => getDefaultWidgets());
$editMode.on(resetWidgets, () => false);
