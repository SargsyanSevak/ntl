import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import dashboardSmall from "../assets/dashboard-small.svg";

export default function HomeComp() {
  return (
    <div className="bg-white min-h-screen flex flex-col-reverse lg:gap-2 gap-6 lg:flex-row justify-center items-center">
      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] anim"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8  lg:py-56">
          <div className="lg:text-start text-center">
            <h1 className="text-[6vw]  font-bold tracking-tight text-gray-900 sm:text-4xl">
              Բեռնափոխադրումների ամբողջական կառավարում 
            </h1>
            <p className="mt-6 text-md leading-7 text-gray-600 text-justify">
            Անխափան կերպով կապվեք ճիշտ գործընկերների հետ և օպտիմիզացրեք ձեր բեռնափոխադրումների ամբողջ գործընթացը, ինչպես երբեք: Միացեք մեզ հիմա և փոխեք ապրանքների տեղափոխման ձևը:
            </p>
            <div className="mt-10 flex items-center  lg:justify-start justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#1C90F3] px-3.5 py-2.5 text-sm  text-white shadow-sm hover:bg-[#4ca7f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Սկսել հիմա
              </a>
              <a
                href="#"
                className="text-sm  leading-6 text-gray-900"
              >
                Իմանալ ավելին <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="max-w-[600px] flex  justify-center items-center pt-[100px] lg:px-0 px-4  lg:py-56">
        <img src={`https://www.dat.com/wp-content/uploads/2021/01/screenshot_power_loads_sidebar_2020-03-laptop-v1.0x650.webp`} alt="" />
      </div>
    </div>
  );
}
