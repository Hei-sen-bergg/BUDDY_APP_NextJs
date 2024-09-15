import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jacob</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.unsplash.com/photo-1724092034168-e6a5c69b70ce?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between my-4 text-sm">
        <div className="flex  gap-8">
          <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              346<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 p-2  bg-slate-50 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              346<span className="hidden md:inline"> Comment</span>
            </span>
          </div>
          
        </div>
      <div className="">
        <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              346<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
