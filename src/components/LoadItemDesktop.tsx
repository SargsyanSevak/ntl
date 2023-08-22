import { useEffect, useState } from "react";
import { testload } from "../data/testload";
import { LoadProps } from "../interfaces/LoadProps";
import Loader from "./Loader"; 
import { testTrucks } from "../data/testTrucks";
import Accordion from "./Accordion";
import { TruckProps } from "../interfaces/TruckProps";
import AccordionItemDesktop from "./AccordionItemDesktop";


export default function LoadItemDesktop({ boardType }: any) {
  const itemsPerRow = 50;
  const [expanded, setExpanded] = useState<false | number>(false);
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
      detectBoardType();
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleMoreLoads = () => {
    setNext(next + 50);
  };

  return (
    <>
      <div>
        {isLoading ? (
          <div className="w-full h-[calc(100vh-110px)]  flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {loadData.slice(0, next)?.map((el, i) => (
              <div key={i} className="pb-[2px]">
                <AccordionItemDesktop
                  {...el}
                  i={i}
                  
                  boardType={boardType}
                />
              </div>
            ))}
          </>
        )}
        {next < loadData?.length && (
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
    </>
  );
}
