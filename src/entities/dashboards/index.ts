export { Dashboards } from "./ui/Dashboards";
export { EditWidgetsCard } from "./ui/EditWidgetsCard";
export { WidgetsManager } from "./ui/WidgetsManager";

export {
  $widgets,
  $widgetsList,
  $templates,
  $currentTemplateId,
  $modalOpened,
  $customViewName,
} from "./model/model";

export {
  addWidget,
  removeWidget,
  setWidgets,
  saveWidgets,
  openModal,
  closeModal,
  changeCustomViewName,
  addTemplate,
  setCurrentTemplate,
  deleteTemplate,
} from "./model/model";

export { getTemplates, getDefaultWidgets } from "./lib/utils";
