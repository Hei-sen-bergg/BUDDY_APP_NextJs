import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* Write */}
      <div className="flex items-center gap-4 ">
        <Image
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full "
        />
        <div className="flex flex-1 items-center   justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer "
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full "
          />
          {/* Description */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium ">Veronica</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              assumenda aliquid. Ipsum perspiciatis tempora consectetur eum,
              excepturi similique quasi aliquid voluptatibus officia ipsa
              ducimus, saepe, sed reprehenderit facere laboriosam eveniet.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">125</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* Icon */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
