import React, { MouseEvent, useCallback } from "react";
import { CrossIcon } from "../icons";
import Button, { ButtonProps } from "./Button";

export interface ModalProps {
  children?: React.ReactNode;
  title: string;
  actions?: ButtonProps[];
  onClose: () => void;
  open: boolean;
}

const Modal = ({ title, children, onClose, actions, open }: ModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (ref.current && ref.current === event.target) {
        onClose();
      }
    },
    [ref]
  );

  if (!open) return null;

  return (
    <div
      ref={ref}
      onClick={handleClickOutside}
      className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-[4]"
    >
      <div className="p-6 rounded-extra-large bg-white min-w-[480px] relative">
        <div className="text-[20px] font-semibold pb-3 border-b-1 border-b-neutral-14">
          {title}
        </div>
        <span>
          <CrossIcon
            color="var(--color-neutral-12)"
            size={20}
            onClick={onClose}
            className="cursor-pointer absolute top-6 right-6"
          />
        </span>
        <div className="py-3 border-b-1 border-b-neutral-14">{children}</div>
        {actions && (
          <div className="flex gap-2 mt-4">
            {actions?.map((action) => (
              <Button {...action} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
