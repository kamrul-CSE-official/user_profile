import { FaGraduationCap } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";

import PostCart, { IPost } from "../Components/Share/PostCart";

const Post = () => {
  const postsData: IPost[] = [
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://thumbs.dreamstime.com/b/nature-water-drops-leaves-raindrops-colorful-scene-spring-autumn-76637040.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaZcjrpW8OgrKdk8ZZ0pHxOxHjeLz8JAFKc6MKLj7eHVnTuM-BsiOPFZXTq6WYpXhCQ0&usqp=CAU",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://thumbs.dreamstime.com/b/nature-water-drops-leaves-raindrops-colorful-scene-spring-autumn-76637040.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
    {
      img: "https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere euismod justo, nec lobortis ligula aliquet nec.",
      like: 120,
      comment: 30,
      share: 10,
    },
  ];
  return (
    <div className="my-5">
      <div className="flex flex-col lg:flex-row gap-2 lg:justify-center mx-auto lg:mx-12">
        <div className="card mb-10 mt-2 lg:w-1/3 sm:w-full md:w-full gap-4 h-fit shadow-2xl lg:sticky lg:top-0 lg:right-0 text-justify p-5">
          <h2 className="text-xl font-extrabold my-2">MD.Kamrul Hasan</h2>
          <div className="space-y-4">
            <p>
              <FaGraduationCap size={25} /> Studied B.Sc in CSE at Port City
              International University - PCIU
            </p>
            <p>
              <IoLocationSharp size={25} /> Lives in Chittagong
            </p>
            <p>
              <FcContacts size={25} /> Mobile:{" "}
              <span className="font-bold">01823855998</span> <br />
              Email: <span className="font-bold">kamrul@gamil.com</span>
            </p>
          </div>
        </div>
        <div className="lg:w-[100%] bg-red-50 md:w-full sm:w-full sm:mx-2 md:mx-1 gap-2 rounded-3xl mb-2">
          {postsData.map((post, i) => (
            <PostCart key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
