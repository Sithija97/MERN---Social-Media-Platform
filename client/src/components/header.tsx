import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../store/store";
import { Link } from "react-router-dom";
import { TbSocial } from "react-icons/tb";
import { Button, TextInput } from ".";
import { setTheme } from "../store/features/theme";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state: RootState) => state.theme);

  const handleTheme = () => {
    const value = theme === "light" ? "dark" : "light";
    dispatch(setTheme(value));
  };

  return (
    <div className="topbar w-full flex flex-row items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 bg-blue rounded text-white">
          <TbSocial />
        </div>
        <span className="text-xl md:text-2xl text-blue font-semibold">
          ShareFun
        </span>
      </Link>

      <form action="" className="hidden md:flex items-center justify-center ">
        <TextInput
          placeholder="Search..."
          styles="'w-[18rem] lg:w-[38rem]  rounded-l-full py-3"
          value={""}
          name="searchTerm"
        />
        <Button
          title="Search"
          type="submit"
          styles="bg-blue text-white px-6 py-[0.7rem] mt-4 rounded-r-full"
        />
      </form>

      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <button onClick={handleTheme}>
          {theme === "dark" ? (
            <BsMoon className="w-6 h-6" />
          ) : (
            <BsSunFill className="w-6 h-6" />
          )}
        </button>
        <div className="hidden lg:flex">
          <IoMdNotificationsOutline className="w-6 h-6" />
        </div>
        <div>
          <Button
            onClick={() => {}}
            title="Log Out"
            styles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
