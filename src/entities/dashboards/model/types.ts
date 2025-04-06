import { Layout } from "react-grid-layout";

export interface Widget {
  title: string;
  id: string;
  width: number;
  height: number;
  xPos: number;
  yPos: number;
}

export interface WidgetListItem {
  id: string;
  title: string;
  defaultWidth: number;
  defaultHeight: number;
}

export interface WidgetLayout extends Layout {
  title: string;
}
