const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex flex-col gap-6">{children}</main>;
};

export default PageContainer;
