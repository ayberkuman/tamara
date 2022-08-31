import { Card } from "./Card";
import { ProductData } from "../constants/ProductData";
export const Catalogue = () => {
  return (
    <div className="w-full max-w-[810px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-5 justify-items-center">
      {ProductData.map((product): any => {
        return <Card key={product.id} {...product} />;
      })}
    </div>
  );
};
