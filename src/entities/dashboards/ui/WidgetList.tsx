import { useUnit } from "effector-react";
import { WidgetListItem } from "./WidgetListItem";
import { $widgetsList } from "../model/model";

export const WidgetList = () => {
  const widgets = useUnit($widgetsList);

  return (
    <div className="h-[200px] overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-neutral-14 scrollbar-hover:scrollbar-thumb-neutral-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-3">
      {widgets.map((widget) => (
        <WidgetListItem
          key={widget.id}
          id={widget.id}
          title={widget.title}
          onEdit={() => {}}
        />
      ))}
    </div>
  );
};
