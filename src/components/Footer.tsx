import { SocialLogo, WhiteLogo } from "@assets/svgs";
import { FooterData } from "src/constants/FooterData";

export const Footer = () => {
  return (
    <div className="flex flex-col p-9">
      <div className="flex justify-between">
        <WhiteLogo />
        <div className="flex text-white grow justify-center gap-10">
          {FooterData.map((title) => {
            return (
              <FooterLinks
                {...title}
                subtitle={title.subtitle}
                key={title.id}
              />
            );
          })}
        </div>
        <div className="p-3 gap-3 flex">
          <div>
            <SocialLogo />
          </div>
          <div>
            <SocialLogo />
          </div>
          <div>
            <SocialLogo />
          </div>
          <div>
            <SocialLogo />
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-textGray w-[90%] mt-5 pt-3 m-auto t-16 text-white flex justify-between items-center">
        <div className="font-light t-16">&copy;2022 Lexir Inc.</div>
        <div className="flex gap-10 cursor-pointer">
          <div>Privacy</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
};
export const FooterLinks = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string[];
}) => {
  return (
    <div className="p-3 px-8 flex flex-col gap-5">
      <a className="text-textGray cursor-default">{title}</a>
      {subtitle.map((subtitle) => {
        return <FooterSubLinks subtitle={subtitle} key={subtitle} />;
      })}
    </div>
  );
};
export const FooterSubLinks = ({ subtitle }: { subtitle: string }) => {
  return <div className="cursor-pointer t-16">{subtitle}</div>;
};
