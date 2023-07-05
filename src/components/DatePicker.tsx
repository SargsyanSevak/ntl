import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerUi:React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className="w-32 h-10 border-x-2 border-y-2 border-zinc-800 flex justify-center items-center m-0 p-0">
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default DatePickerUi;
