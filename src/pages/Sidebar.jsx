import { Navbar } from "../components/index";

const Sidebar = () => {
  return (
    <div className="bg-blue-700 h-full sticky top-0 z-10 lg:static">
      <Navbar />
    </div>
  );
};

export default Sidebar;
