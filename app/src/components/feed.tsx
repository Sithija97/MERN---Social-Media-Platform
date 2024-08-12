import { useState } from "react";
import { Postcard } from ".";
import { posts } from "../data";

export const Feed = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        // <Loading /> - need to add a spinner
        <p>Loading...</p>
      ) : posts?.length > 0 ? (
        posts?.map((post) => (
          <Postcard
            key={post?._id}
            post={post}
            deletePost={() => {}}
            likePost={() => {}}
          />
        ))
      ) : (
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-lg text-ascent-2">No Post Available</p>
        </div>
      )}
    </>
  );
};
