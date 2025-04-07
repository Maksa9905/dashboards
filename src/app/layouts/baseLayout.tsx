import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <div className="p-6">
      <span className="absolute bottom-2 left-2 text-neutral-10">LIQN</span>
      <Outlet />
    </div>
  );
};
