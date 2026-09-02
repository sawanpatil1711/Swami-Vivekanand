import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const usefulLinks = [
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms",
  },
  {
    name: "Downloads",
    path: "/downloads",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="School Logo"
                className="h-14 w-14 rounded-full"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  Swami Vivekanand Academy
                </h2>

                <p className="text-sm text-gray-400">
                  Learn • Grow • Inspire
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Swami Vivekanand Academy is committed to providing quality education
              through innovation, discipline, and holistic development,
              preparing students to become responsible global citizens.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "https://www.instagram.com/svau.14?utm_source=qr&igsh=Y3ozeWZtYTV3OGJw" },
                { icon: FaYoutube, href: "https://youtube.com/@swamivivekanandacademyumar889?si=4vtoaahtjljVEmwk" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 transition hover:text-blue-400"
                  >
                    <ChevronRight size={16} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Useful Links
            </h3>

            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 transition hover:text-blue-400"
                  >
                    <ChevronRight size={16} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 text-blue-400"
                  size={20}
                />

                <p>
                  Near Patil Dharamshala, Umar Khali,
                  <br />
                  Khargone, Madhya Pradesh,
                  <br />
                  India - 451441
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <span>+91 99267 72522</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20} />
                <span>Rahulvaidhya82@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Swami Vivekanand Academy. All Rights Reserved.
          </p>

          <p className="text-center">
            Designed & Developed by <span className="font-semibold text-white">Sawan Patil</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;