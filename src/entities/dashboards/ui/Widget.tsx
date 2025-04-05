interface WidgetProps {
  title: string;
  id: string;
}

export const Widget = ({ title }: WidgetProps) => {
  return (
    <div className="p-3.5 h-full w-full flex items-center justify-center bg-white rounded-extra-large text-center">
      <div>
        <h3 className="text-large">{title}</h3>
        <p className="text-medium text-neutral-10">Not implemented</p>
      </div>
    </div>
  );
};
