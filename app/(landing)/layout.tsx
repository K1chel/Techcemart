import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex flex-1 mt-20">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default LandingLayout;
