import React from "react";

const Profile = () => {
  return (
    <div className="md:px-10 px-2 flex flex-col gap-6">
      <div className="avatar">
        <div className="w-full h-40 border-2 border-slate-300 rounded-xl"></div>
      </div>

      <div className="flex md:flex-nowrap flex-wrap border-2 border-slate-300 rounded-xl p-4">
        <div className="personal-info text-sm md:w-1/2 w-full ">
          <div className="w-full  ">
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Ընկերության անվանումը</h4>
              <p>NTL Logistics LLC</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Գործունեության տեսակը</h4>
              <p>Պատվիրատու</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Էլ-հասցե</h4>
              <p>info@ntllogistics.com</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Հեռախուսահամար</h4>
              <p>+374 77 35-80-90</p>
            </div>
          </div>
        </div>
        <div className="personal-info text-sm md:w-1/2 w-full">
          <div className="w-full  ">
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Ընկերության անվանումը</h4>
              <p>NTL Logistics LLC</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Գործունեության տեսակը</h4>
              <p>Պատվիրատու</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Էլ-հասցե</h4>
              <p>info@ntllogistics.com</p>
            </div>
            <div className="w-full h-14 border-b-2 flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Վեբ կայք</h4>
              <p>www.ntl.am</p>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <div className="w-full border-2 border-slate-300 rounded-xl">
          <h4 className="md:text-center  font-semibold pt-4 pl-4 md:pl-0">Վճարային համակարգ</h4>
          <div className="flex pb-4 flex-wrap md:flex-nowrap px-4 text-sm">
          <div className="w-full md:w-1/2 h-14 flex border-b-2 md:border-b-0 flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Վճարաման եղանակ</h4>
              <p>Անկանխիկ բանկային փոխանցում</p>
            </div>
          <div className="w-full md:w-1/2 h-14  flex flex-col justify-center md:items-center items-start">
              <h4 className="text-gray-500">Տևողությււն</h4>
              <p>7 աշխատանքային օր</p> 
            </div>
          </div>
        </div>
      </div>
      <div className="password">
        <div className="w-full h-40 border-2 border-slate-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Profile;
