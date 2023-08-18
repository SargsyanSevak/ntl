import LoadItemMobile from "./LoadItemMobile";
import { useEffect, useState } from "react";
import { testload } from "../data/testload";
import { testTrucks } from "../data/testTrucks";
import { LoadProps } from "../interfaces/LoadProps";
import Loader from "./Loader"; 
import { TruckProps } from "../interfaces/TruckProps";

const LoadMobile = ({boardType}:any) => {
  const itemsPerRow = 50;
  const [next, setNext] = useState<number>(itemsPerRow);
  const [isLoading, setIsLoading] = useState(true);
  const [loadData, setLoadData] = useState<LoadProps[] | TruckProps[]>([]);

  const detectBoardType = () => {
    if (boardType === "load") {
      setLoadData(testload);
      return;
    } else {
      setLoadData(testTrucks);
    }
  };
  useEffect(() => {
    setTimeout(() => {
        detectBoardType()
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleMoreLoads = () => {
    setNext(next + 50);
  };
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[calc(100vh-110px)]  flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {loadData.slice(0, next)?.map((el, i) => (
            <div key={i} >
              <LoadItemMobile {...el}  boardType={boardType}/>
            </div>
          ))}
        </>
      )}
      {next < testload?.length && (
        <div className="w-full flex justify-center py-4 ">
          <button
            onClick={handleMoreLoads}
            className="bg-[#1C90F3] text-white text-sm rounded-md px-4 py-2"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadMobile;
