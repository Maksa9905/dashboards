import { EditIcon } from "#/shared/icons";
import { Button } from "#/shared/ui";
import { useUnit } from "effector-react";
import {
  $editMode,
  resetWidgets,
  saveWidgets,
  setEditMode,
} from "../model/model";

export const EditWidgetsButtons = () => {
  const isEditing = useUnit($editMode);

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
    <Button
      size="medium"
      onClick={() => setEditMode(true)}
      startIcon={EditIcon}
    >
      Edit Widgets
    </Button>
  );
};
