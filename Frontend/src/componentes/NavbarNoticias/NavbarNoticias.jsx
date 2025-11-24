import React from "react";
import CustomUser from "../customUser/CustomUser";

const NavbarNoticiasContacto = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo-noslogan.png"
              alt="Logo Universidad Galileo"
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* User Section */}
        <div className="flex items-center">
          <CustomUser />
        </div>
      </div>
    </div>
  </nav>
);

export default NavbarNoticiasContacto;

