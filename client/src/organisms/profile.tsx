import { Link } from "react-router-dom";
import { user } from "../data";
import { formatDistanceToNow } from "date-fns";
import {
  BriefcaseBusiness,
  Facebook,
  FilePenLine,
  Instagram,
  MapPin,
  Twitter,
  UserRound,
} from "lucide-react";

export const Profile = () => {
  return (
    <div>
      <div className="w-full bg-white flex flex-col items-center shadow-sm rounded-lg px-6 py-4">
        <div className="w-full flex items-center justify-between border-b border-[#66666645] pb-5">
          <Link to={`/protected/profile/${user?._id}`} className="flex gap-2">
            <img
              src={user?.profileUrl}
              alt="profileImg"
              className="w-14 h-14 object-cover rounded-full"
            />

            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-ascent-1">
                {`${user?.firstName} ${user?.lastName}`}
              </p>
              {/* <span className="text-ascent-2">{user?.email}</span> */}
              <span className="text-ascent-2">code@gmail.com</span>
            </div>
          </Link>

          <div className="mb-6">
            {user?._id === user?._id ? (
              <FilePenLine
                size={22}
                className="text-blue cursor-pointer"
                // onClick={handleEditProfile}
              />
            ) : (
              <button
                className="bg-[#0444a430] text-sm text-white p-1 rounded"
                onClick={() => {}}
              >
                <UserRound size={20} className="text-[#0f52b6]" />
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div className="flex gap-2 items-center text-ascent-2">
            <MapPin className="text-xl text-ascent-1" />
            <span>{"Add Location"}</span>
            {/* user?.location ?? */}
          </div>

          <div className="flex gap-2 items-center text-ascent-2">
            <BriefcaseBusiness className=" text-lg text-ascent-1" />
            <span>{"Add Profession"}</span>
          </div>
          {/* user?.profession ?? */}
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <p className="text-xl text-ascent-1 font-semibold">
            {user?.friends?.length} Friends
          </p>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Who viewed your profile</span>
            <span className="text-ascent-1 text-lg">{user?.views?.length}</span>
          </div>

          <span className="text-base text-blue">
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Joined</span>
            <span className="text-ascent-1 text-base">
              {formatDistanceToNow(new Date(user?.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 py-4 pb-6">
          <p className="text-ascent-1 text-lg font-semibold">Social Profile</p>

          <div className="flex gap-2 items-center text-ascent-2">
            <Instagram className=" text-xl text-ascent-1" />
            <span>Instagram</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <Twitter className=" text-xl text-ascent-1" />
            <span>Twitter</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <Facebook className=" text-xl text-ascent-1" />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};
