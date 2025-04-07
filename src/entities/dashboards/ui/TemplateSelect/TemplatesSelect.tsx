import { useMemo } from "react";
import { TemplatesSelectOption } from "./TemplateSelectOption";
import { Select } from "#/shared/ui";
import { TemplatesSelectNewOption } from "./TemplateSelectNewOption";
import { useUnit } from "effector-react";
import {
  $currentTemplateId,
  $templates,
  openModal,
} from "#/entities/dashboards";

export const TemplatesSelect = () => {
  const templates = useUnit($templates);
  const templateId = useUnit($currentTemplateId);

  const currentTemplate = useMemo(
    () => templates.find((template) => template.id === templateId),
    [templates, templateId]
  );

  const templateOptions = useMemo(
    () => [
      ...templates.map((template) => ({
        label: template.name,
        value: template.id,
        content: (
          <TemplatesSelectOption value={template.id} label={template.name} />
        ),
      })),
      {
        label: "New Template",
        value: "new",
        content: <TemplatesSelectNewOption onClick={openModal} />,
      },
    ],
    [templates]
  );

  return (
    <Select
      label="Select Template"
      value={currentTemplate?.id || ""}
      customOptions
      options={templateOptions}
    />
  );
};
