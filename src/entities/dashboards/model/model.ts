import { createEvent, createStore } from "effector";
import { NewWidgetEvent, Widget } from "./types";

const $widgets = createStore<Widget[]>([]);

const addWidget = createEvent<NewWidgetEvent>();

$widgets.on(addWidget, (store, widget) => {
  return [...store];
});
