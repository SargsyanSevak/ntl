import React, { useState } from "react";
import { testload } from "../../data/testload";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
const ChangeLoads: React.FC = () => {
  console.log(testload);

  return (
    <div className="md:px-10 px-4 relative z-50">
      <div>
        {testload.map((el) => (
          <div key={el.id} className="flex justify-between border-y-2 py-2">
           
            <div>{el.date}</div>
            <div>{el.pickup}</div>
            <div>{el.delivery}</div>
            <div>{el.status}</div>
            <div className="flex gap-6">
              <button className="cursor-pointer">
                <MdEdit />
              </button>
              <button className="cursor-pointer text-red-700">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeLoads;
