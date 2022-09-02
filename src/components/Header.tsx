import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full bg-white  shadow-md ">
      <div className="max-w-[1280px] flex justify-between items-center px-8 py-10 m-auto">
        <button>
        </button>
        <div>
          <Navigation username="leandro" />
        </div>
      </div>
    </header>
  );
};
