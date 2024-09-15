import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
        {/* AVATAR */}
        <Image src= "https://images.unsplash.com/photo-1725696096775-bbddc1344597?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
       
        {/* POST */}
        <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
            <textarea placeholder="What's on your mind?" className="bg-slate-100 flex-1 p-3 rounded-lg" id=""></textarea>
            <Image src= "/emoji.png" alt="" width={20} height={20} className="cursor-pointer self-end" />

        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src= "/addimage.png" alt="" width={20} height={20} />
                Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src= "/addVideo.png" alt="" width={20} height={20} />
                Video
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src= "/addevent.png" alt="" width={20} height={20} />
                Event
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src= "/poll.png" alt="" width={20} height={20} />
                Poll
            </div>
            </div>
        </div>

    </div>

  )
}

export default AddPost