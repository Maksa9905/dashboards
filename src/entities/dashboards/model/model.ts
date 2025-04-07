import { createEvent, createStore, sample } from "effector";
import { Template, Widget, WidgetListItem } from "./types";
import { widgetsList } from "./constants";
import { Layout } from "react-grid-layout";
import { mapLayoutToWidget } from "./mappers";
import {
  saveToStorage,
  getDefaultWidgets,
  getCurrentTemplate,
  getTemplates,
  saveTemplates,
  setCurrentTemplateInStorage,
} from "../lib/utils";

export const $editMode = createStore<boolean>(false);

export const $widgets = createStore<Widget[]>(getDefaultWidgets());
export const $widgetsList = createStore<WidgetListItem[]>(widgetsList);

export const $templates = createStore<Template[]>(getTemplates());

export const $currentTemplateId = createStore<string | null>(
  getCurrentTemplate()
);

export const $modalOpened = createStore<boolean>(false);

export const $customViewName = createStore<string>("");

export const addWidget = createEvent<string>();
export const removeWidget = createEvent<string>();

export const setWidgets = createEvent<Layout[]>();

export const setEditMode = createEvent<boolean>();

export const saveWidgets = createEvent();
export const resetWidgets = createEvent();

export const setCurrentTemplate = createEvent<string>();

export const openModal = createEvent();
export const closeModal = createEvent();

export const changeCustomViewName = createEvent<string>();

export const deleteTemplate = createEvent<string>();

export const addTemplate = createEvent<Template>();

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

/**
 * Saving Widgets
 */

$widgets.on(saveWidgets, (widgets) => {
  saveToStorage(widgets, $currentTemplateId.getState());
});
$editMode.on(saveWidgets, () => false);
$templates.on(saveWidgets, (templates) => {
  const templateIndex = templates.findIndex(
    (template) => template.id === $currentTemplateId.getState()
  );

  const widgets = $widgets.getState();

  const newTemplates: Template[] = [
    ...templates.slice(0, templateIndex),
    {
      name: templates[templateIndex].name,
      id: templates[templateIndex].id,
      widgets,
    },
    ...templates.slice(templateIndex + 1),
  ];

  return newTemplates;
});

/**
 * Resetting widgets
 */

$widgets.on(resetWidgets, () => getDefaultWidgets());
$editMode.on(resetWidgets, () => false);

/**
 * Changing template
 */

$currentTemplateId.on(setCurrentTemplate, (_, id) => {
  setCurrentTemplateInStorage(id);
  return id;
});
$widgets.on(
  setCurrentTemplate,
  (_, id) => $templates.getState().find((t) => t.id === id)?.widgets || []
);

/**
 * Create template modal
 */

$modalOpened.on(openModal, () => true);
$modalOpened.on(closeModal, () => false);

$customViewName.on(changeCustomViewName, (_, name) => name);

/**
 * Deleting template
 */

$templates.on(deleteTemplate, (templates, id) => {
  saveTemplates(templates.filter((template) => template.id !== id));

  return templates.filter((template) => template.id !== id);
});

$widgets.on(deleteTemplate, (_, deletedId) => {
  const currentTemplateId = $currentTemplateId.getState();

  console.log(currentTemplateId, deletedId, $templates.getState());

  if (currentTemplateId === deletedId)
    return $templates.getState()[0]?.widgets || [];
});

$currentTemplateId.on(deleteTemplate, (currentId, deletedId) => {
  if (currentId === deletedId) {
    setCurrentTemplateInStorage($templates.getState()[0]?.id || "");
    return $templates.getState()[0]?.id || null;
  }
});

/**
 * Adding template
 */

$templates.on(addTemplate, (templates, template) => {
  saveTemplates([...templates, template]);
  return [...templates, template];
});
$currentTemplateId.on(addTemplate, (_, template) => {
  setCurrentTemplateInStorage(template.id);
  return template.id;
});
$widgets.on(addTemplate, (_, template) => template.widgets);
$modalOpened.on(addTemplate, () => false);
