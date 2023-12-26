/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Friends,
  Header,
  Postcard,
  Profile as ProfileCard,
} from "../components";
import { RootState, useAppSelector } from "../store/store";
import { posts } from "../data";

export const Profile = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [userInfo, setUserInfo] = useState(user);
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {};
  const handleLikePost = () => {};
  return (
    <div className="home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
      <Header />
      <div className="w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full">
        {/* LEFT */}
        <div className="hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-y-auto">
          <ProfileCard />

          <div className="block lg:hidden">
            <Friends />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 h-full bg-orimary px-4 flex flex-col gap-6 overflow-y-auto">
          {loading ? (
            // <Loading />
            <p>loading...</p>
          ) : posts?.length > 0 ? (
            posts?.map((post) => (
              <Postcard
                post={post}
                key={post?._id}
                deletePost={handleDelete}
                likePost={handleLikePost}
              />
            ))
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <p className="text-lg text-ascent-2">No Post Available</p>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto">
          <Friends />
        </div>
      </div>
    </div>
  );
};
