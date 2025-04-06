import { Button, Card, Select } from "#/shared/ui";
import { useState } from "react";
import { EditWidgetsButtons } from "./EditWidgetsButtons";

export const EditWidgetsCard = () => {
  const [value, setValue] = useState("");

  return (
    <Card className="flex">
      <EditWidgetsButtons />
      <Select
        label="123"
        value={value}
        customOptions
        onChange={setValue}
        options={[
          { label: "123", value: "1" },
          { label: "234", value: "2" },
          { label: "345", value: "3" },
          { label: "345", value: "4" },
          { label: "345", value: "5" },
          { label: "345", value: "6" },
        ]}
      />
    </Card>
  );
};
