import Image from "next/image";
import baldoria from "../assets/png/baldoria-logo.png";
export const ProductDetail = () => {
  return (
    <div className="border-[1px] border-cardBgGray max-w-[380px] w-full">
      <div className="mx-auto max-w-[215px] pt-5">
        <Image src={baldoria} layout="intrinsic" />
      </div>
      <div className="pt-16 mx-auto text-center max-w-[300px]">
        <h2 className="font-source text-left t-34">Baldoria Vermouth</h2>
        <h6 className="t-16 text-left pt-6 pb-8 font-medium text-lightBlack">
          Badoria rosso is a red vermouth that balances fresh, herby bitter
          notes against. Kiss My Rhubarb takes its origins from an old
          handwritten recipe from co-creators Niels’ and Wouters’ rebellious
          grandparents.
        </h6>
        <button className="font-lato font-bold text-btnGreen">Read More</button>
      </div>
    </div>
  );
};
