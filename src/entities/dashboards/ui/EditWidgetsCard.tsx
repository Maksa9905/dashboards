import { Button, Card, Modal, Select } from "#/shared/ui";
import { useState } from "react";
import { EditWidgetsButtons } from "./EditWidgetsButtons";
import { TemplatesSelect } from "./TemplateSelect";
import { CreateTemplateModal } from "./CreateTemplateModal";

export const EditWidgetsCard = () => {
  const [value, setValue] = useState("");

  return (
    <Card className="flex">
      <EditWidgetsButtons />
      <CreateTemplateModal />
    </Card>
  );
};
