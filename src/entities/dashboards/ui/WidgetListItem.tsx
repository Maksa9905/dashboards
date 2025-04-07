import { Button } from "#/shared/ui";
import { useUnit } from "effector-react";
import { useCallback, useMemo } from "react";
import { $widgets, addWidget, removeWidget } from "../model/model";

export interface WidgetListItemProps {
  id: string;
  title: string;
  onEdit: () => void;
}

export const WidgetListItem = ({ title, id }: WidgetListItemProps) => {
  const widgets = useUnit($widgets);

  const added = useMemo(
    () => widgets.find((widget) => widget.id === id),
    [widgets, id]
  );

  const handleClick = useCallback(
    (id: string) => {
      if (!added) addWidget(id);
      else removeWidget(id);
    },
    [added]
  );

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-medium border h-[70px] ${
        added ? "bg-primary-8 border-primary-3" : "bg-white border-primary-5"
      }`}
    >
      <h3 className="text-medium">{title}</h3>
      <Button onClick={() => handleClick(id)}>
        {added ? "Remove" : "Add"}
      </Button>
    </div>
  );
};
