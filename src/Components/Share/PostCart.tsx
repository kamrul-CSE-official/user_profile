import { FaComment, FaHeart, FaShare } from "react-icons/fa";

export interface IPost {
  img: string;
  post: string;
  like: number;
  comment: number;
  share: number;
}

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={post?.img}
          className="w-full h-80 object-cover object-center"
          alt="Post Image"
        />
        <div className="p-4">
          <p className="text-gray-600 mb-4">{post?.post}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <FaHeart />
                <span>{post?.like}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <FaComment />
                <span>{post?.comment}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <FaShare />
                <span>{post?.share}</span>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
