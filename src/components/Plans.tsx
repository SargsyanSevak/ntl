import React from "react";

const Plans:React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto pt-40 bg-white">
      <div className="w-full h-screen relative  flex flex-col justify-evenly items-center">
        <div>
          {" "}
          <h3 className="text-[30px] md:text-[40px] text-white font-bold ">
            Pricing Plans
          </h3>
        </div>
        <div>
          {" "}
          <p className="text-color  w-full text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.{" "}
          </p>
        </div>
    
        <div className="w-full h-[430px]  flex justify-stretch md:justify-around items-center overflow-x-scroll overflow-hidden custom-scrollbar gap-8 px-6">
                <div className="w-[80vw] md:w-[300px] h-[400px] flex-shrink-0  px-10  bg-[#0F1F4B] rounded-[50px]">
                  <div className="w-full pt-10">
                    <h2 className="text-white font-bold text-[24px] text-center">
                      Starter
                    </h2>
                    <p className="text-color text-center">up to 3 loads</p>
                  </div>
                  <div className="border-y-2 border-[#2A407C]  w-full h-[1px] mx-auto mt-4"></div>
                  <div className="text-white font-bold text-[60px] flex justify-center items-center gap-2 pt-6">
                    <span className="text-[30px] ">$</span> <h1>0</h1>
                  </div>
                  <p className="w-full text-center text-color">per month</p>

                  <div className="w-full h-[150px] flex justify-center items-center text-gray-500">
                    <button className="border-x-2 border-y-2 border-[#2A407C]  w-2/3 rounded-[50px] py-2" disabled>Order</button>
                  </div>
                </div>
                <div className="w-[80vw] md:w-[300px] h-[400px] flex-shrink-0  px-10  bg-[#fff] rounded-[50px]">
                  <div className="w-full pt-10">
                    <h2 className="text-black font-bold text-[24px] text-center">
                      Standart
                    </h2>
                    <p className="text-color text-center">up to 10 loads</p>
                  </div>
                  <div className="border-y-2 border-[#2A407C ] w-full h-[1px] mx-auto mt-4"></div>
                  <div className="text-black font-bold text-[60px] flex justify-center items-center gap-2 pt-6">
                    <span className="text-[30px] ">$</span> <h1>9</h1>
                  </div>
                  <p className="w-full text-center text-color">per month</p>

                  <div className="w-full h-[150px] flex justify-center items-center text-black">
                    <button className="border-x-2 border-y-2 border-[#2A407C] w-2/3 rounded-[50px] py-2">Order</button>
                  </div>
                </div>
                <div className="w-[80vw] md:w-[300px] h-[400px] flex-shrink-0  px-10  bg-[#0F1F4B] rounded-[50px]">
                  <div className="w-full pt-10">
                    <h2 className="text-white font-bold text-[24px] text-center">
                      Premium
                    </h2>
                    <p className="text-color text-center">infinity loads</p>
                  </div>
                  <div className="border-y-2 border-[#2A407C]  w-full h-[1px] mx-auto mt-4"></div>
                  <div className="text-white font-bold text-[60px] flex justify-center items-center gap-2 pt-6">
                    <span className="text-[30px] ">$</span> <h1>15</h1>
                  </div>
                  <p className="w-full text-center text-color">per month</p>

                  <div className="w-full h-[150px] flex justify-center items-center text-white">
                    <button className="border-x-2 border-y-2 border-[#2A407C]  w-2/3 rounded-[50px] py-2">Order</button>
                  </div>
                </div>
               
              </div>
        </div>
     
     
    </section>
  );
};

export default Plans;
