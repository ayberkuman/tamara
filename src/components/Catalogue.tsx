import { Card } from "./Card";
import { ProductData } from "../constants/ProductData";
export const Catalogue = () => {
  return (
    <div className="w-full max-w-[810px] grid grid-cols-4 gap-5 justify-items-center">
      {ProductData.map((product): any => {
        return (
          <Card
            key={product.id}
            {...product}
            brandName={product.brandName}
            typeOfDrink={product.typeOfDrink}
            price={product.price}
            productImage={product.productImage}
          />
        );
      })}
    </div>
  );
};
