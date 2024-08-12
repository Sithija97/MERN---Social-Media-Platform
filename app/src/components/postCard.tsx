import { useState } from "react";
import { RootState, useAppSelector } from "../store/store";
import { Link } from "react-router-dom";
import moment from "moment";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CommentsForm, ReplyCard } from ".";
import { postComments } from "../data";
import { Comment, Reply } from "../models";
import NoProfile from "../assets/userprofile.png";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any;
  deletePost: (postId: string) => void;
  likePost: () => void;
}

export const Postcard = ({ post, deletePost }: IProps) => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  const [showAll, setShowAll] = useState<number | string>(0);
  const [showReply, setShowReply] = useState<number | string>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<Comment[] | any>([]);
  const [loading, setLoading] = useState(false);
  const [replyComments, setReplyComments] = useState<number | string>(0);
  const [showComments, setShowComments] = useState<number | string>(0);

  const handleShowLess = () => {
    setShowAll(0);
  };
  const handleShowMore = (postId: string) => {
    setShowAll(postId);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getComments = (postId: string) => {
    setReplyComments(0);
    setComments(postComments);
    setLoading(false);
  };

  const handleShowReplies = (replyId: string) => {
    setShowReply(showReply === replyId ? 0 : replyId);
  };

  const handleLike = async (url: string) => {
    console.log(url);
  };

  return (
    <div className="mb-2 bg-primary p-4 rounded-xl">
      {/* post details - description, img, like buttons etc */}
      <div className="flex gap-3 items-center mb-2">
        <Link to={`/profile/${post?.userId?._id}`}>
          <img
            src={post?.userId?.profileUrl ?? NoProfile}
            alt={post?.userId?.firstName}
            className="w-15 h-14 object-cover rounded-full"
          />
        </Link>

        <div className="w-full flex justify-between">
          <div>
            <Link to={`/profile/${post?.userId?._id}`}>
              <p className="font-medium text-lg text-ascent-1">
                {post?.userId?.firstName} {post?.userId?.secondName}
              </p>
            </Link>
            <span className="text-ascent-2">{post?.userId?.location}</span>
          </div>
        </div>

        <span className="text-ascent-2">
          {moment(post?.createdAt ?? "2023-12-26").fromNow()}
        </span>
      </div>

      <div>
        <p className="text-ascent-2">
          {showAll === post?._id
            ? post?.description
            : post?.description.slice(0, 300)}

          {post?.description?.length > 301 &&
            (showAll === post?._id ? (
              <span
                className="text-blue ml-2 font-medium cursor-pointer"
                onClick={handleShowLess}
              >
                Show Less
              </span>
            ) : (
              <span
                className="text-blue ml-2 font-medium cursor-pointer"
                onClick={() => handleShowMore(post?._id)}
              >
                Show More
              </span>
            ))}
        </p>

        {post?.image && (
          <img
            src={post?.image}
            alt="post image"
            className="w-full mt-2 rounded-lg"
          />
        )}
      </div>

      <div
        className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2
      text-base border-t border-[#66666645]"
      >
        <p className="flex gap-2 items-center text-base cursor-pointer">
          {post?.likes?.includes(user?._id) ? (
            <BiSolidLike size={20} color="blue" />
          ) : (
            <BiLike size={20} />
          )}
          {post?.likes?.length} Likes
        </p>

        <p
          className="flex gap-2 items-center text-base cursor-pointer"
          onClick={() => {
            setShowComments(showComments === post._id ? null : post._id);
            getComments(post?._id);
          }}
        >
          <BiComment size={20} />
          {post?.comments?.length} Comments
        </p>

        {user?._id === post?.userId?._id && (
          <div
            className="flex gap-1 items-center text-base text-ascent-1 cursor-pointer"
            onClick={() => deletePost(post?._id)}
          >
            <MdOutlineDeleteOutline size={20} />
            <span>Delete</span>
          </div>
        )}
      </div>

      {/* likes and Comments */}
      {showComments === post?._id && (
        <div className="w-full mt-4 pt-4 border-t border-[#66666645]">
          <CommentsForm id={post?._id} getComments={getComments} />

          {loading ? (
            <p>Loading...</p>
          ) : comments?.length > 0 ? (
            comments?.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (comment: any) => (
                <div className="w-full py-2" key={comment?._id}>
                  <div className="flex gap-3 mb-1 items-center">
                    <Link to={`/profile/${comment?.userId?._id}`}>
                      <img
                        src={comment?.userId?.profileUrl ?? NoProfile}
                        alt={comment?.userId?.firstName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </Link>
                    <div>
                      <Link to={"/profile/" + comment?.userId?._id}>
                        <p className="font-medium text-base text-ascent-1">
                          {comment?.userId?.firstName}{" "}
                          {comment?.userId?.lastName}
                        </p>
                      </Link>
                      <span className="text-ascent-2 text-sm">
                        {moment(comment?.createdAt ?? "2023-05-25").fromNow()}
                      </span>
                    </div>
                  </div>

                  <div className="ml-12">
                    <p className="text-ascent-2">{comment?.comment}</p>

                    <div className="mt-2 flex gap-6">
                      <p className="flex gap-2 items-center text-base text-ascent-2 cursor-pointer">
                        {user && comment?.likes?.includes(user?._id) ? (
                          <BiSolidLike size={20} color="blue" />
                        ) : (
                          <BiLike size={20} />
                        )}
                        {comment?.likes?.length} Likes
                      </p>
                      <span
                        className="text-blue cursor-pointer"
                        onClick={() => setReplyComments(comment?._id)}
                      >
                        Reply
                      </span>
                    </div>

                    {replyComments === comment?._id && (
                      <CommentsForm
                        id={comment?._id}
                        replyAt={comment?.from}
                        getComments={() => getComments(post?._id)}
                      />
                    )}
                  </div>

                  {/* replies */}
                  <div className="py-2 px-8 mt-6">
                    {comment?.replies?.length > 0 && (
                      <p
                        className="text-base text-ascent-1 cursor-pointer"
                        onClick={() => handleShowReplies(comment?.replies?._id)}
                      >
                        Show Replies ({comment?.replies?.length})
                      </p>
                    )}

                    {showReply === comment?.replies?._id &&
                      comment?.replies?.map((reply: Reply) => (
                        <ReplyCard
                          reply={reply}
                          key={reply?._id}
                          handleLike={() =>
                            handleLike(
                              "/posts/like-comment/" +
                                comment?._id +
                                "/" +
                                reply?._id
                            )
                          }
                        />
                      ))}
                  </div>
                </div>
              )
            )
          ) : (
            <span className="flex text-sm py-4 text-ascent-2 text-center">
              No Comments, be first to comment
            </span>
          )}
        </div>
      )}
    </div>
  );
};
