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
    <div className="w-full">
      <div className="flex justify-center items-center py-[19px] px-[32px] bg-cardBgGray">
        <Image src={productImage} layout="intrinsic" />
      </div>
      <div className="t-14 flex flex-col justify-around p-2.5 gap-2 shadow-md">
        <div className="flex justify-between">
          <div className="t-14 font-bold text-lightBlack">
            {brandName.toUpperCase()}
          </div>
          <div>{price}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-textGray t-14">{typeOfDrink.toUpperCase()}</div>
          <button className="bg-cardBgGray leading-[1px] t-34">+</button>
        </div>
      </div>
    </div>
  );
};
