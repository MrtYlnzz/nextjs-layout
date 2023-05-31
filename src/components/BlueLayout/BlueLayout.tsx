interface IBlueLayoutProps {
  children: React.ReactNode;
}

const BlueLayout = (props: IBlueLayoutProps) => {
  return <main className="bg-blue-400">{props.children}</main>;
};

export { BlueLayout };
