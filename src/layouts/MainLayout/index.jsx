import Navbar from "../../components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-auto ">
      <Navbar />
      {children}
    </main>
  );
};
export default MainLayout;
