import React, { useState } from "react";
import DatePickerUi from "./DatePicker";

const DashboardHeader = () => {
  const [open, setOpen] = useState<boolean | null>(false);

  return (
    <div className={`w-full h-[${open ? '400px' : '70px'}] bg-red-300 py-4 transition`}
 
    >
      <button onClick={() => setOpen(!open)}>Open</button>
      <DatePickerUi/>
    </div>
  );
};

export default DashboardHeader;
