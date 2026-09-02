import { BookOpen, Users, ShieldCheck, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality",
    sub: "Education",
  },
  {
    icon: Users,
    title: "Experienced",
    sub: "Teachers",
  },
  {
    icon: ShieldCheck,
    title: "Safe",
    sub: "Environment",
  },
  {
    icon: Trophy,
    title: "Holistic",
    sub: "Development",
  },
];

const HeroFeatures = () => {
  return (
    <div
      className="
    mt-30
    rounded-3xl
    bg-white/55
    p-4
    shadow-2xl
    backdrop-blur
    grid
    grid-cols-4
    gap-6

    md:rounded-none
    md:bg-transparent
    md:p-0
    md:shadow-none
    md:grid-cols-4
  "
    >
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex flex-col items-center text-center md:flex-row md:text-left"
          >
            <div className="mb-3 rounded-full bg-blue-100 p-4 md:mb-0 md:bg-white md:shadow-lg">
              <Icon className="text-blue-700" size={18} />
            </div>

            <div>
              <h4 className="font-semibold text-sm text-slate-900">{item.title}</h4>

              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroFeatures;
