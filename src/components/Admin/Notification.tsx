import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
interface NotificationProps {
  title?: string;
  description?: string;
}

const Notification = ({
  title,
  description,
  handleChangeOpenStatus,
  handleDeleteNotification,
  id,
}: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isRead, setIsRead] = useState<boolean>(false);
  const [isImportant, setIsImportant] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
    setIsRead(true);
    handleChangeOpenStatus(id);
  };
  const handleSetImportant = () => {
    setShowDetails(false);
    setIsImportant((prev) => !prev);
  };

  const getCurrentDateTime = (): string => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };
  return (
    <div className="border-2 border-gray-200 shadow  rounded-md">
      <div
        className={`font-bold cursor-pointer flex justify-center items-center p-2 ${
          isRead ? "text-gray-500 " : "text-black "
        }`}
      >
        <div className="w-[50px] h-full flex justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center ">
                <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-care-icon.png"
            alt=""
            className="w-[30px]"
          /> 
            </div>
         
        </div>
        <div className="w-full  flex md:flex-row flex-col-reverse">
          <div
            className="w-full lg:w-[70%] h-full font-semibold  flex flex-col justify-between items-start pl-4"
            onClick={toggleDetails}
          >
            <h4 className="text[2vw]">Customer's support team</h4>
            <h4 className="text-sm">{title}</h4>
          </div>
          <div className="w-full lg:w-[30%] h-full  flex md:flex-col flex-row md:justify-around justify-between items-end pl-4 md:pr-4 pr-0 font-light">
            <div className="">{getCurrentDateTime()}</div>
            <div className="stars flex sm:gap-4 gap-2">
              <span className="text-xl" onClick={handleSetImportant}>
                {isImportant ? (
                  <AiFillStar color="orange" />
                ) : (
                  <AiOutlineStar />
                )}
              </span>
              <div className="text-xl" onClick={()=>handleDeleteNotification(id)}>
                <CiMenuKebab />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <p className="text-gray-600 text-sm leading-6 font-semibold py-4 px-2">{description}</p>
      )}
    </div>
  );
};

export default Notification;
