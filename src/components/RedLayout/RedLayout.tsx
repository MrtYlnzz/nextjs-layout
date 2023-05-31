interface IRedLayoutProps {
  children: React.ReactNode;
}

const RedLayout = (props: IRedLayoutProps) => {
  return <main className="bg-red-400">{props.children}</main>;
};

export { RedLayout };
