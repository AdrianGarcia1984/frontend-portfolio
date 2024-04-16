import { Outlet } from "react-router-dom";
import Sidebar from "../components/sections/Sidebar";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import ProfileCover from "../components/sections/ProfileCover";
import DropdownLang from "../components/sections/DropdownLang";

export default function Root() {
    return (
      <>
      <main className="min-h-screen relative bg-gray-50 pb-10">
      <div className="flex justify-center items-center  space-x-2">
      <ProfileCover />
      </div>
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Sidebar />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar />
            <Outlet/>
            <br/>
          </div>
        </div>
      </div>
      <Footer />
    </main>
      </>
    );
  }
