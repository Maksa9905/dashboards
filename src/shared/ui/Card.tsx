export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-extra-large px-6 py-4 gap-2 ${className}`}
    >
      {title && <h2 className="text-large font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
