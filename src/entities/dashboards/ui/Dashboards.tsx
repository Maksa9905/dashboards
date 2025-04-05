import ReactGridLayout, { Layout } from "react-grid-layout";
import { Widget } from "./Widget";

export const Dashboards = () => {
  const layout: (Layout & { title: string })[] = [
    { i: "Widget1", x: 0, y: 0, w: 1, h: 2, title: "Widget 1" },
    { i: "Widget2", x: 1, y: 0, w: 1, h: 1, title: "Widget 2" },
    { i: "Widget3", x: 2, y: 0, w: 1, h: 1, title: "Widget 3" },
  ];

  return (
    <ReactGridLayout
      layout={layout}
      cols={4}
      autoSize
      rowHeight={100}
      width={1200}
    >
      {layout.map((el) => (
        <div key={el.i}>
          <Widget title={el.title} id={el.i} />
        </div>
      ))}
    </ReactGridLayout>
  );
};
