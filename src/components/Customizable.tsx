import React from "react";
import widget2 from '../assets/widget2.svg'
const Customizable:React.FC = () => {
  return (
    <div className="w-full md:h-[600px] h-auto max-w-[1600px] mx-auto bg-white">
      <div className="max-w-[1280px] md:h-[600px] h-auto  mx-auto px-6 md:px-8 flex gap-4 flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-[400px]  flex flex-col justify-center items-start gap-10">
          <div>
            <h3 className="text-[30px] md:text-[40px] font-bold">
            Fully customizable   <br />address your needs
            </h3>
          </div>
          <div>
            <p className="text-color w-full md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-[400px] flex justify-center items-center">
            <img src={widget2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customizable;
