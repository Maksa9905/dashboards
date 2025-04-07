import {
  $templates,
  Dashboards,
  EditWidgetsCard,
  WidgetsManager,
} from "#/entities/dashboards";
import { PageContainer } from "#/shared/ui";
import { useUnit } from "effector-react";

const DashboardsPage = () => {
  const templates = useUnit($templates);

  console.log(templates);

  return (
    <PageContainer>
      <EditWidgetsCard />
      <Dashboards />
    </PageContainer>
  );
};

export default DashboardsPage;
