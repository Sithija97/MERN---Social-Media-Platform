import { useState } from "react";
import { requests } from "../data";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from ".";
import { Link } from "react-router-dom";
import NoProfile from "../assets/userprofile.png";
import { Request } from "../models";

export const Requests = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [friendRequest, setFriendRequest] = useState<Request[]>(requests);
  return (
    <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
      <div className="flex items-center justify-between text-xl text-ascent-1 pb-2 border-b border-[#66666645]">
        <span>Friend Request</span>
        <span>{friendRequest?.length}</span>
      </div>

      <div className="w-full flex flex-col gap-4 pt-4">
        {friendRequest?.map(({ _id, requestFrom: from }: Request) => (
          <div key={_id} className="flex items-center justify-between">
            <Link
              to={"/profile/" + from?._id}
              className="w-full flex gap-4 items-center cursor-pointer"
            >
              <img
                src={from?.profileUrl ?? NoProfile}
                alt={from?.firstName}
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex-1">
                <p className="text-base font-medium text-ascent-1">
                  {`${from?.firstName} ${from?.lastName}`}
                </p>
                <span className="text-sm text-ascent-2">
                  {from?.profession ?? "No Profession"}
                </span>
              </div>
            </Link>

            <div className="flex gap-1">
              <Button
                title="Accept"
                styles="bg-[#0444a4] text-xs text-white px-2 py-1 rounded-full"
              />
              <Button
                title="Deny"
                styles="border border-[#666] text-xs text-ascent-1 px-2 py-1 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
