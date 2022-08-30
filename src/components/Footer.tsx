import { CartIcon, ProfilePicPlaceHolder, WhiteLogo } from "@assets/svgs";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="p-9 flex justify-between">
        <WhiteLogo />
        <div className="flex text-white grow justify-center gap-10">
          <div className="p-3 px-8 flex flex-col gap-4">
            <div>Community</div>
            <div>lexir</div>
            <div>business</div>
            <div>sales</div>
          </div>
          <div className="p-3 px-8 flex flex-col gap-4">
            <div>Community</div>
            <div>lexir</div>
            <div>business</div>
            <div>sales</div>
          </div>
          <div className="p-3 px-8 flex flex-col gap-4">
            <div>Community</div>
            <div>lexir</div>
            <div>business</div>
            <div>sales</div>
          </div>
          <div className="p-3 px-8 flex flex-col gap-4">
            <div>Community</div>
            <div>lexir</div>
            <div>business</div>
            <div>sales</div>
          </div>
        </div>
        <div className="p-3 gap-3 flex">
          <div>
            <ProfilePicPlaceHolder isWhite={true} />
          </div>
          <div>
            <CartIcon isWhite={true} />
          </div>
          <div>
            <CartIcon isWhite={true} />
          </div>
          <div>
            <CartIcon isWhite={true} />
          </div>
        </div>
      </div>
      <div className="border-t-[1px] h-[60px] border-textGray w-[90%] m-auto t-16 text-white flex justify-between items-center">
        <div>2022 Lexir Inc.</div>
        <div className="flex gap-5">
          <div>Privacy</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
};
