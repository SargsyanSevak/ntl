import React from "react";
import dashboardSmall from "../assets/dashboard-small.svg";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const activeLanguage = i18n.language;

  console.log(activeLanguage);

  const setLanguage = () => {
    i18n.changeLanguage(activeLanguage === "am" ? "ru" : "am");
  };

  return (
    <>
      <section className="max-w-[1600px] mx-auto">
        <div className="w-full h-screen relative background">
          <div className="max-w-[1280px] h-full  mx-auto px-[20px] flex">
            <div className="w-full md:w-1/2 h-full  flex flex-col gap-6 md:gap-10 justify-center items-center">
              <div className="flex md:hidden  justify-center items-center">
                <img
                  src={dashboardSmall}
                  alt=""
                  className=" w-full"
                  width={700}
                  height={400}
                />
              </div>
              <div className="flex w-full justify-start">
                <h1
                  className="text-2xl md:text-4xl font-bold text-white text-left"
                  onClick={() => setLanguage()}
                >
                  {/* Monitor your business */}
                  {t(`home.title`)}
                  <br /> on real-time dashboard
                </h1>
              </div>
              <div className="text-color">
                <p className="w-full md:w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.{" "}
                </p>
              </div>
              <div className="w-full flex justify-start">
                <button className="w-full sm:w-[160px] h-[50px] bg-[#1C90F3] rounded-[100px] text-white">
                  Try for free
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full hidden md:flex justify-center items-center">
              <img
                src={dashboardSmall}
                alt=""
                className="object-contain max-h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
