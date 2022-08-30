import { CartIcon, ProfilePicPlaceHolder } from "@assets/svgs";
type NavigationProps = {
  username: String;
};
export const Navigation = ({ username }: NavigationProps) => {
  return (
    <nav className="flex gap-12 t-14 font-lato font-medium">
      <a>PRODUCTS</a>
      <a>BRANDS</a>
      <div className="flex">
        <ProfilePicPlaceHolder isWhite={false} />
        <a>HELLO, {username.toUpperCase()}</a>
      </div>
      <div className="flex">
        <CartIcon isWhite={false} />
        <a>CART</a>
      </div>
    </nav>
  );
};
