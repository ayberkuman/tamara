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
    <div className="w-44">
      <div className="flex justify-center h-[233px] items-center bg-cardBgGray">
        <Image src={productImage} width={70} height={195} />
      </div>
      <div className="h-[72px] t-14 flex flex-col justify-around p-[10px] shadow-md">
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
