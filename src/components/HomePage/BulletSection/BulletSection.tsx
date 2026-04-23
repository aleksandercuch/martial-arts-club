import { FaShieldAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiDumbbell } from "react-icons/ci";
import { translations } from "@/messages/translations";
import { useLanguage } from "@/context/LanguageContext";

export const BulletSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang as "pl" | "en"];

  return (
    <section className="w-full bg-black/40 text-white px-6 py-20 md:py-28 lg:py-36 font-trajan tracking-widest">
      <div className="max-w-5xl mx-auto grid gap-16 md:gap-12 md:grid-cols-3 text-center">
        <div className="flex flex-col items-center">
          <FaShieldAlt className="mb-4 text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
          <h3 className="text-base font-semibold mb-3">
            {t.HomePage.bulletOneTitle}
          </h3>
          <p className="text-xs leading-relaxed opacity-90 font-trajan">
            {t.HomePage.bulletOneDesc}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CiDumbbell className="mb-4 text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
          <h3 className="text-base font-semibold mb-3">
            {t.HomePage.bulletTwoTitle}
          </h3>
          <p className="text-xs leading-relaxed opacity-90 font-trajan">
            {t.HomePage.bulletTwoDesc}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaPeopleGroup className="mb-4 text-white/90 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
          <h3 className="text-base font-semibold mb-3">
            {t.HomePage.bulletThreeTitle}
          </h3>
          <p className="text-xs leading-relaxed opacity-90 font-trajan">
            {t.HomePage.bulletThreeDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
