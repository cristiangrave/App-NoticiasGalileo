import CustomUser from "../customUser/CustomUser";

const NavbarNoticiasContacto = () => (
  <nav className="bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b rounded-b-lg border-gray-200/50 shadow-sm transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-200"></div>
            <a href="#" className="relative flex items-center gap-2">
              <img
                src="/logo-noslogan.png"
                alt="Logo Universidad Galileo"
                className="h-12 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
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

