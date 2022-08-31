import { CartIcon, ProfilePicPlaceHolder } from "@assets/svgs";
type NavigationProps = {
  username: String;
};
export const Navigation = ({ username }: NavigationProps) => {
  return (
    <nav className="flex gap-12 t-14 font-lato font-medium">
      <a className="cursor-pointer">PRODUCTS</a>
      <a className="cursor-pointer">BRANDS</a>
      <div className="flex">
        <ProfilePicPlaceHolder />
        <a className="cursor-pointer">HELLO, {username.toUpperCase()}</a>
      </div>
      <div className="flex">
        <CartIcon />
        <a className="cursor-pointer">CART</a>
      </div>
    </nav>
  );
};
