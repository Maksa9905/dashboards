import { $templates } from "../model/model";
import { Template, Widget } from "../model/types";

export const getDefaultWidgets = (): Widget[] => {
  const templates: Template[] = JSON.parse(
    localStorage.getItem("templates") || "[]"
  );

  const template = templates.find(
    (template) => template.id === getCurrentTemplate()
  );

  console.log(templates, getCurrentTemplate());

  return template?.widgets || [];
};

export const saveToStorage = (widgets: Widget[], templateId: string | null) => {
  if (!templateId) return;

  const templates = $templates.getState();

  const templateIndex = templates.findIndex(
    (template) => template.id === templateId
  );

  const newTemplates: Template[] = [
    ...templates.slice(0, templateIndex),
    {
      name: templates[templateIndex].name,
      id: templates[templateIndex].id,
      widgets,
    },
    ...templates.slice(templateIndex + 1),
  ];

  localStorage.setItem("templates", JSON.stringify(newTemplates));
};

export const saveTemplates = (templates: Template[]) => {
  localStorage.setItem("templates", JSON.stringify(templates));
};

export const getTemplates = (): Template[] => {
  return JSON.parse(localStorage.getItem("templates") || "[]");
};

export const getCurrentTemplate = (): string => {
  return localStorage.getItem("current_template")
    ? String(localStorage.getItem("current_template"))
    : "";
};

export const setCurrentTemplateInStorage = (templateId: string) => {
  localStorage.setItem("current_template", templateId);
};
