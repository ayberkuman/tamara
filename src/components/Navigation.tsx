import { BurgerMenu, CartIcon, ProfilePicPlaceHolder } from "@assets/svgs";
import { motion } from "framer-motion";
type NavigationProps = {
  username: String;
};
export const Navigation = ({ username }: NavigationProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <>
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden md:flex lg:gap-12 md:gap-5 t-14 font-lato font-medium text-lightBlack"
      >
        <motion.a
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
        >
          PRODUCTS
        </motion.a>
        <motion.a
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
        >
          BRANDS
        </motion.a>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="flex items-center"
        >
          <ProfilePicPlaceHolder />
          <a className="cursor-pointer px-2">HELLO, {username.toUpperCase()}</a>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="flex items-center"
        >
          <div className="cart relative">
            <CartIcon />
          </div>
          <a className="cursor-pointer px-2">CART</a>
        </motion.div>
      </motion.nav>
      <button className="md:hidden">
        <BurgerMenu />
      </button>
    </>
  );
};
