import React from "react";
import watch from '../assets/watch.svg'
import pc from '../assets/pc.svg'
import performance from '../assets/performance.svg'
const Features:React.FC = () => {
  return (
    <div className="w-full md:h-[600px] h-auto max-w-[1600px] mx-auto bg-white">
      
      <div className="max-w-[1280px] md:h-[600px] h-auto  mx-auto px-6 md:px-8 flex flex-col justify-evenly">
        <h2 className="w-full text-center text-[40px] font-bold mt-10 md:mt-0">
          Main Features
        </h2>
        <div className="w-full flex justify-start mt-6 md:mt-0">
          <p className="text-color text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
          </p>
        </div>
        <div className="w-full md:h-[300px] h-auto mt-6 md:mt-0">
          <div className="w-full h-full flex justify-between items-center flex-col md:flex-row gap-4 pt-10 md:pt-0">
            <div className="w-full md:w-1/3 h-60  flex flex-col justify-evenly items-center text-center glass">
              <div>
                <img src={watch} alt="" />
              </div>
              <div className="font-bold">
                <h4>Monitoring 24/7</h4>
              </div>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-60  flex flex-col justify-evenly items-center text-center glass">
              <div>
                <img src={pc} alt="" />
              </div>
              <div className="font-bold">
                <h4>Widget System</h4>
              </div>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-60 flex flex-col justify-evenly items-center text-center glass">
              <div>
                <img src={performance} alt="" />
              </div>
              <div className="font-bold">
                <h4>Best Performance</h4>
              </div>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
