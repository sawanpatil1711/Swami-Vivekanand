import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  // { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-blue-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 99267 72522</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Rahulvaidhya82@gmail.com</span>
            </div>
          </div>

          <button className="rounded-md bg-yellow-400 px-4 py-1.5 font-semibold text-black transition hover:bg-yellow-300">
            Admission Open
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="School Logo"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <h1 className="text-xl font-bold text-blue-900">
                Swami Vivekanand Academy
              </h1>

              <p className="text-xs text-gray-500">Learn • Grow • Inspire</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* <button className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-white transition hover:bg-blue-800">
              Enquiry
            </button> */}
            <a
              href="https://wa.me/+919926772522"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
            >
              Enquiry
            </a>
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px]" : "max-h-0"
          } lg:hidden`}
        >
          <div className="space-y-2 border-t bg-white px-6 py-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/+919926772522"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={20} />
              Enquiry
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
