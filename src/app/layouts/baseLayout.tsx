import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  );
};
