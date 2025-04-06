import { Responsive, WidthProvider } from "react-grid-layout";
import { Widget } from "./Widget";
import { WidgetsManager } from "./WidgetsManager";
import { useMemo } from "react";
import { useUnit } from "effector-react";
import { $editMode, $widgets, setWidgets } from "../model/model";
import { WidgetLayout } from "../model/types";
import { mapWidgetToLayout } from "../model/mappers";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboards = () => {
  const widgets = useUnit($widgets);
  const isEditing = useUnit($editMode);

  const layout = useMemo<WidgetLayout[]>(
    () =>
      widgets.map((widget) => ({
        ...mapWidgetToLayout(widget),
        static: !isEditing,
      })),
    [widgets, isEditing]
  );

  return (
    <div className="flex flex-col gap-2.5">
      {isEditing && <WidgetsManager />}
      <ResponsiveGridLayout
        width={window.innerWidth}
        onLayoutChange={setWidgets}
        breakpoints={{ lg: 1200 }}
        layouts={{ lg: layout }}
        cols={{ lg: 5 }}
        autoSize
        rowHeight={100}
        isResizable={isEditing}
      >
        {layout.map((el) => (
          <div className={isEditing ? "" : "hide-resize-handle"} key={el.i}>
            <Widget title={el.title} id={el.i} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
