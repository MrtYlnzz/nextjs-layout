interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  return <main className="flex min-h-screen">{props.children}</main>;
};

export { MainLayout };
