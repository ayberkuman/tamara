import { LocationPin } from "@assets/svgs";
import { motion } from "framer-motion";
import Image from "next/image";
import baldoria from "../assets/png/baldoria-logo.png";
export const ProductDetail = ({ category }: { category: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-[1px] mb-5 md:mb-0 border-cardBgGray md:max-w-[380px] w-full"
    >
      <div className="mx-auto max-w-[215px] pt-5">
        <Image src={baldoria} layout="intrinsic" alt="baldoria logo" />
      </div>
      <div className="pt-8 md:pt-16 mx-auto text-center px-4">
        <h2 className="font-source text-left t-34">Baldoria Vermouth</h2>
        <h6 className="t-16 text-left pt-3 md:pt-6 pb-8 font-medium text-lightBlack">
          Badoria rosso is a red vermouth that balances fresh, herby bitter
          notes against. Kiss My Rhubarb takes its origins from an old
          handwritten recipe from co-creators Niels’ and Wouters’ rebellious
          grandparents.
        </h6>
        <button className="font-lato font-bold text-btnGreen">Read More</button>
      </div>
      <ProductLocationTag />
      <ProductCategoryTag category={category} />
    </motion.div>
  );
};
export const ProductLocationTag = () => {
  return (
    <div className="flex justify-start mt-16">
      <div className="px-5">
        <LocationPin />
      </div>
      <div>
        <p className="t-16">Location</p>
        <p className="t-22">London, United Kingdom</p>
      </div>
    </div>
  );
};
export const ProductCategoryTag = ({ category }: { category: string[] }) => {
  return (
    <div className="flex justify-start mt-10">
      <div className="px-5">
        <LocationPin />
      </div>
      <div>
        <p className="t-16">Product Categories</p>
        <div className="flex gap-2 py-2.5">
          {category.map((category) => {
            return (
              <button key={category} className="px-5 py-2.5 bg-btnGray">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
