import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";


export default function UIModal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[60]"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full">
          <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:w-2/3 w-[90%] md:py-10 py-4">
                <h4 className="w-full text-center md:text-[18px] text-[16px] font-semibold">Ավելացնել թիմի նոր անդամ</h4>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-wrap justify-between items-center gap-y-4">
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="անուն" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="ազգանուն" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="էլ.հասցե" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="հեռախոսահամար" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="գաղտնաբառ" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                  <div className="w-full md:w-[48%] h-10 overflow-hidden">
                    <input type="text" placeholder="կրկնել գաղտնաբառը" className="w-full h-full rounded-md border-2 pl-4"/>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm  text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Պահպանել
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Չեղարկելել
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
