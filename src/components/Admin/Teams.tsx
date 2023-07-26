import React from "react";
import { CiSearch } from "react-icons/ci";
import TeamMember from "./TeamMember";
const teamData = [
  {
    firstName: "Hakob",
    lastName: "Harutyunyan",
    title: "dispatcher",
    email: "hakob@ntl.com",
    tell: "+37477 34-56-78",
    online: true,
  },
  {
    firstName: "Aram",
    lastName: "Harutyunyan",
    title: "dispatcher",
    email: "hakob@ntl.com",
    tell: "+37477 34-56-78",
    online: true,
  },
  {
    firstName: "Karen",
    lastName: "Harutyunyan",
    title: "dispatcher",
    email: "hakob@ntl.com",
    tell: "+37477 34-56-78",
    online: true,
  },
  {
    firstName: "Gagik",
    lastName: "Harutyunyan",
    title: "dispatcher",
    email: "hakob@ntl.com",
    tell: "+37477 34-56-78",
    online: true,
  },
];
const Teams = () => {
  return (
    <div>
      <div className="w-full h-20 border-2 flex justify-between items-center px-2 md:px-4">
        <div className="flex h-full items-center">
          <h4>Թիմի անդամների քանակը</h4>
          <p>({teamData.length})</p>
        </div>
        {/* <div>
          <div className="w-60 h-10 relative">
            <input
              type="search"
              placeholder="փնտրել..."
              className="w-full h-full rounded-xl pl-10 active:border-none"
            />
            <div className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 text-xl">
              <CiSearch />
            </div>
          </div>
        </div> */}
        <div className="add-team">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Ավելացնել
          </button>
        </div>
      </div>
      <div className="header w-full h-20 mt-10 md:flex justify-between items-center text-sm font-semibold hidden">
        <div className="w-60 h-12  flex justify-center items-center">
          <p>Full Name & email</p>
        </div>
        <div className="w-40 h-10  flex justify-center items-center">View content</div>
        <div className="w-40 h-10  flex justify-center items-center">Manage content</div>
        <div className="w-40 h-10  flex justify-center items-center">Manage loads</div>
        <div className="w-40 h-10  flex justify-center items-center">Manage teams</div>
        <div className="w-[100px] h-10 flex justify-center items-center"></div>
      </div>
      <div className="w-full flex flex-col ">
          {
            teamData.map((el)=>(
              <TeamMember {...el}/>
            ))
          }
      </div>
    </div>
  );
};

export default Teams;
