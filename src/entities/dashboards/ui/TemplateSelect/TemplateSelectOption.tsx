import { DashboardsIcon, ApplyIcon, PenIcon, TrashIcon } from "#/shared/icons";
import { Button, IconButton } from "#/shared/ui";
import { useUnit } from "effector-react";
import {
  $currentTemplateId,
  setCurrentTemplate,
  deleteTemplate,
} from "#/entities/dashboards";

export type TemplatesSelectOptionProps = {
  label: string;
  value: string;
};

export const TemplatesSelectOption = ({
  label,
  value,
}: TemplatesSelectOptionProps) => {
  const currentTemplate = useUnit($currentTemplateId);

  return (
    <li className="h-[48px] w-[580px] flex items-center justify-between py-2 px-3 border-b-neutral-14 border-b">
      <p>{label}</p>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setCurrentTemplate(value)}
          size="medium"
          startIcon={currentTemplate === value ? ApplyIcon : DashboardsIcon}
          variant={currentTemplate === value ? "contained" : "outlined"}
        >
          {currentTemplate === value ? "Applied" : "Apply View"}
        </Button>
        <div className="flex items-center">
          <IconButton onClick={() => {}} icon={PenIcon} />
          <IconButton onClick={() => deleteTemplate(value)} icon={TrashIcon} />
        </div>
      </div>
    </li>
  );
};
