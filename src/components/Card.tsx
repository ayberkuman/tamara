import { AddButton } from "@assets/svgs";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  brandName: String;
  typeOfDrink: String;
  price: number;
  productImage: StaticImageData;
};

export const Card = ({
  brandName,
  typeOfDrink,
  price,
  productImage,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
      className="w-full cursor-pointer"
    >
      <div className="flex justify-center py-[19px] px-[32px] bg-cardBgGray">
        <Image src={productImage} layout="intrinsic" alt="product image" />
      </div>
      <div className="t-14 flex flex-col justify-around p-2.5 gap-2 shadow-md">
        <div className="flex justify-between">
          <div className="t-14 font-bold text-lightBlack">
            {brandName.toUpperCase()}
          </div>
          <div className="text-[#6B6B6B]">€{price}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-textGray t-14">{typeOfDrink.toUpperCase()}</div>
          <button className="bg-cardBgGray hover:scale-125 leading-[1px] rounded t-34">
            <AddButton />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
