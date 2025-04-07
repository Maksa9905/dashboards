import { ButtonProps, Modal, TextField } from "#/shared/ui";
import { useUnit } from "effector-react";
import { useMemo } from "react";
import uuid4 from "uuid4";
import {
  $customViewName,
  $modalOpened,
  changeCustomViewName,
  closeModal,
  addTemplate,
} from "#/entities/dashboards";

export const CreateTemplateModal = () => {
  const modalOpened = useUnit($modalOpened);
  const name = useUnit($customViewName);

  const actionsConfig: ButtonProps[] = useMemo(
    () => [
      {
        size: "medium",
        variant: "outlined",
        children: "Cancel",
        onClick: closeModal,
      },
      {
        size: "medium",
        variant: "contained",
        children: "Apply",
        onClick: () =>
          addTemplate({
            id: uuid4(),
            name: name,
            widgets: [],
          }),
      },
    ],
    [name]
  );

  return (
    <Modal
      open={modalOpened}
      actions={actionsConfig}
      onClose={closeModal}
      title="Add Custom View"
    >
      <div className="flex gap-3">
        <p className="text-neutral-8 text-medium">Custom View Name</p>
        <TextField
          className="w-full"
          type="text"
          value={name}
          onChange={changeCustomViewName}
          label="Enter name"
        />
      </div>
    </Modal>
  );
};
