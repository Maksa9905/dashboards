import { Card, TextField } from "#/shared/ui";
import { WidgetList } from "./WidgetList";

export const WidgetsManager = () => {
  return (
    <Card title="Manage Widgets">
      <TextField className="w-full mb-4" value="" label="Search" />
      <WidgetList />
    </Card>
  );
};
