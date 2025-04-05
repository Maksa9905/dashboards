import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <div>
      Header
      <Outlet />
    </div>
  );
};
