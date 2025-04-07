import { PenIcon } from "#/shared/icons";
import { Button } from "#/shared/ui";
import { useUnit } from "effector-react";
import {
  $currentTemplateId,
  $editMode,
  resetWidgets,
  saveWidgets,
  setEditMode,
} from "../model/model";
import { TemplatesSelect } from "./TemplateSelect";

export const EditWidgetsButtons = () => {
  const isEditing = useUnit($editMode);
  const templateId = useUnit($currentTemplateId);

  if (isEditing)
    return (
      <div className="flex gap-2.5">
        <Button size="medium" onClick={() => resetWidgets()}>
          Cancel
        </Button>
        <Button onClick={() => saveWidgets()} variant="contained" size="medium">
          Save Changes
        </Button>
      </div>
    );

  return (
    <div className="flex gap-2.5">
      {Boolean(templateId) && (
        <Button
          size="medium"
          onClick={() => setEditMode(true)}
          startIcon={PenIcon}
        >
          Edit Widgets
        </Button>
      )}
      <TemplatesSelect />
    </div>
  );
};
