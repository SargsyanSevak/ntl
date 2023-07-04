import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../assets/logo.svg'
import { Helmet } from 'react-helmet';
export default function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => setShowPassword(!showPassword);
  return (
    <section className="w-full min-h-screen flex">
       <Helmet>
        <title>{`Գրանցվել`}</title>
      </Helmet>
      <div className="w-full md:w-1/2 h-screen  px-sm">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ԳՐԱՆՑՎԵԼ
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-2 relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Անուն"
                    required
                    className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
                  />
                  <div className="absolute top-[1rem] right-6 text-xl text-slate-500">
                    <CgProfile />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2 relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    placeholder="Ազգանուն"
                    className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
                  />
                  <div className="absolute top-[1rem] right-6 text-xl text-slate-500">
                    <CgProfile />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2 relative">
                  <select className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[17px] text-gray-400  placeholder:text-gray-900   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none appearance-none	">
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-200"
                    >
                      Գործունեության տեսակ
                    </option>
                    <option value="">Պատվիրատու</option>
                    <option value="">Փոխադրող</option>
                  </select>
                  <div className="absolute top-[1.2rem] right-6 text-2xl text-slate-500">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Էլ-հասցե"
                    required
                    className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
                  />
                  <div className="absolute top-[1rem] right-6 text-xl text-slate-500">
                    <MdOutlineMailOutline />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Գաղտնաբառ"
                    autoComplete="current-password"
                    required
                    className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
                  />
                  <div
                    className="absolute top-[1rem] right-6 text-2xl cursor-pointer text-slate-500 z-50"
                    onClick={handleShow}
                  >
                    {" "}
                    <BiShow />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-2xl bg-[#1c90f3] px-3 py-[10px] text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Գրանցվել
                </button>
              </div>
            </form>

            <p className="mt-10  text-center text-sm text-gray-500">
              Արդեն ունե՞ք հաշիվ{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-[#1c90f3] hover:text-blue-500"
              >
                Մուտք
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen bg-green-400 hidden md:block register"></div>
    </section>
  );
}
