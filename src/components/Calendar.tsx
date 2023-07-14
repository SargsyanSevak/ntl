import React from "react";
import calendar from '../assets/calendar.svg'
const Calendar = () => {
  return (
    <div className="w-full md:h-[600px] h-auto max-w-[1600px] mx-auto bg-white">
      <div className="max-w-[1280px] md:h-[600px] h-auto  mx-auto px-6 md:px-8 flex gap-4 flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-[400px]  flex flex-col justify-center items-start gap-10 ">
          <div>
            <h3 className="text-[30px] md:text-[40px] font-bold">
            Pre-built Dashboard  <br />Templates
            </h3>
          </div>
          <div>
            <p className="text-color w-full md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-[400px] flex justify-center items-center">
            <img src={calendar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
