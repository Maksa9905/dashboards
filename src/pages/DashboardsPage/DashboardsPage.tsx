import {
  Dashboards,
  EditWidgetsCard,
  WidgetsManager,
} from "#/entities/dashboards";
import { PageContainer } from "#/shared/ui";

const DashboardsPage = () => {
  return (
    <PageContainer>
      <EditWidgetsCard />
      <Dashboards />
    </PageContainer>
  );
};

export default DashboardsPage;
