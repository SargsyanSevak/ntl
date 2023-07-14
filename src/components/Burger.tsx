import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/logo.svg'
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "./Avatar";
interface FullScreenModalProps {
  isOpen: boolean;
  navigation: any;
  onClose: () => void;
}

export const MobileMenu: React.FC<FullScreenModalProps> = ({
  isOpen,
  onClose,
  navigation,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed  inset-0 modal flex justify-center items-center bg-[#ccd8fa]  mobile"
        >
          <motion.div
            initial={{ width: "90%", height: "1%" }}
            animate={{ width: "90%", height: "95%" }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            exit={{ width: "90%", height: "5%" }}
            className="bg-white w-16 h-16 "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.75 }}
              className="relative w-full h-full overflow-hidden"
            >
              <div
                className="absolute top-4 right-6 cursor-pointer text-[#9ca8cb] text-4xl"
                onClick={onClose}
              >
                <AiOutlineClose />
              </div>
              <div className="w-full h-full">
                <div className=" h-full flex flex-col justify-center gap-y-12  items-center uppercase">
                  
                    <div>
                      <Avatar showDropDown={false}/>
                    </div>
                  
                  {/* <div>
                    <img src={Logo} alt="" />
                  </div> */}
                  {navigation.map((el: any) => (
                    <a
                      href={el.href}
                      className="text-xl text-center text-[#65749f] "
                      onClick={onClose}
                    >
                      {el.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
