import { CutString, checkLengthOfValue } from "../utils/Check";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { HiArrowRight } from "react-icons/hi";
import CallOptions from "./CallOptions";
import { Link } from "react-router-dom";
const AccordionItemDesktop = ({
  id,
  age,
  date,
  truckType,
  loadType,
  pickup,
  delivery,
  distance,
  company,
  contact,
  length,
  weight,
  rate,
  commodity,
  comment,
  boardType,
}: any) => {
  return (
    <>
      <Accordion className="lg:block hidden" as="div">
        <AccordionItem>
          <AccordionHeader className="AccordionHeader" as="div">
            <div className="max-w-[2000px] lg:flex hidden">
              <div className="w-full h-[32px] bg-slate-200 dark:bg-slate-700 dark:text-slate-200  text-[13px]  flex justify-around gap-[1px] font-[400]">
                <div className="flex justify-start items-center pl-[6px] w-[50px]">
                  <div>{age}</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[50px]">
                  <div>{date}</div>
                </div>
                <div className="flex justify-start items-center pl-[6px] w-[50px]">
                  <div>{truckType}</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[40px]">
                  <div title={loadType}>{loadType[0].toUpperCase()}</div>
                </div>

                <div className="flex justify-start items-center pl-[6px] w-[150px]">
                  <div title={pickup}>{CutString(pickup)}</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[35px]">
                  <div>
                    <HiArrowRight />
                  </div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[150px]">
                  <div title={delivery}>{CutString(delivery)}</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[70px]">
                  <div>{distance} կմ</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[160px] text-[#1C90F3]">
                  <div title={company}>{CutString(company)}</div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[140px]">
                  <div
                    className="cursor-pointer text-[13px]"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <CallOptions contact={contact} />
                  </div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[50px]">
                  <div>{checkLengthOfValue(length, "մ³")} </div>
                </div>
                <div className=" flex justify-start items-center pl-[6px] w-[80px]">
                  <div>{checkLengthOfValue(weight, "կգ")} </div>
                </div>
                <div className="flex justify-start items-center pl-[6px] w-[70px]">
                  <div className="text-[#1C90F3]">
                    {checkLengthOfValue(rate, "$")}
                  </div>
                </div>
                {boardType === "load" && (
                  <div className="flex justify-start items-center  w-[70px]">
                    <Link
                      to={`/dashboard/preview/${id}`}
                      target="_blank"
                      type="button"
                      className=" font-light   bg-slate-500 hover:bg-slate-400 text-white focus:outline-none    focus:ring-0  rounded-xl text-[11px] px-[13px] py-[3px]  flex justify-center items-center transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Քարտեզ
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="AccordionBody w-full bg-gray-300  dark:text-white dark:bg-[#132b46]">
            <div className="w-full h-28 flex flex-col gap-2 justify-center px-4">
              {boardType === "load" && (
                <div className="text-[12px] flex items-center gap-2">
                  <h4 className="font-bold">Բեռը `</h4> <p>{commodity}</p>
                </div>
              )}

              <div className="text-[12px] flex items-center gap-2">
                <h4 className="font-bold">Նշում `</h4> <p>{comment}</p>
              </div>

              {boardType === "load" && (
                <div className="text-[12px] flex items-center gap-2">
                  <h4 className="font-bold">Վճարում `</h4> <p>{"7 աշխ. օր"}</p>
                </div>
              )}
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionItemDesktop;
