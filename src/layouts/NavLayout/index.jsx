const NavLayout = ({ children }) => {
  return (
    <main className="w-full  h-[10vh] p-6 flex flex-row items-center bg-[#0E1117] text-white   justify-between">
      {children}
    </main>
  );
};
export default NavLayout;
