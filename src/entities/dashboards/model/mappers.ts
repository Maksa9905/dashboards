import { Layout } from "react-grid-layout";
import { Widget, WidgetLayout } from "./types";

export const mapWidgetToLayout = (widget: Widget) => {
  const layout: WidgetLayout = {
    i: widget.id,
    title: widget.title,
    w: widget.width,
    h: widget.height,
    x: widget.xPos,
    y: widget.yPos,
  };

  return layout;
};

export const mapLayoutToWidget = (layout: Layout, title: string) => {
  const widget: Widget = {
    id: layout.i,
    title: title,
    width: layout.w,
    height: layout.h,
    xPos: layout.x,
    yPos: layout.y,
  };

  return widget;
};
