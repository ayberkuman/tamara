import { CartIcon, LocationPin, ProfilePicPlaceHolder } from "@assets/svgs";
type NavigationProps = {
  username: String;
};
export const Navigation = ({ username }: NavigationProps) => {
  return (
    <>
      <nav className="lg:flex lg:gap-12 md:grid md:grid-cols-2 md:gap-5 t-14 font-lato hidden font-medium">
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
      <button className="md:hidden">
        <LocationPin />
      </button>
    </>
  );
};
