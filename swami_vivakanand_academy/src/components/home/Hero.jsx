import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

import HeroFeatures from "./HeroFeatures";
// import HeroStats from "./HeroStats";

// import heroBg from "../../assets/hero/hero-bg.png"; // Your uploaded image
import heroDesktop from "../../assets/hero/hero-desktop.png";
import heroMobile from "../../assets/hero/hero-mobile.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <picture>
        <source media="(max-width:768px)" srcSet={heroMobile} />

        <img
          src={heroDesktop}
          alt="School"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Left White Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:w-2/3"></div> */}

      <div className="relative z-10 mx-auto flex min-h-[760px] md:min-h-screen max-w-7xl items-center px-5">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl pt-0 md:pt-0"
        >
          {/* Badge */}

          <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
            <GraduationCap className="text-blue-700" size={18} />

            <span className="text-xs font-semibold text-blue-700 md:text-base">
              Nurturing Minds, Building Futures
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl mt-1 font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
            From Nursery
            <br />
            to Class 9
          </h1>

          <p className="mt-2 max-w-md text-base leading-8 text-slate-700 md:text-lg">
            Swami Vivekanand Academy empowers every child through academic
            excellence, discipline and holistic learning.
          </p>

          {/* Buttons */}

          <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex w-fit items-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Admission Open
            </Link>

            <Link
              to="/about"
              className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Features */}

          <HeroFeatures />
        </motion.div>
      </div>

      {/* Floating Stats */}

      {/* <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-5">
        <HeroStats />
      </div> */}
    </section>
  );
};

export default Hero;
