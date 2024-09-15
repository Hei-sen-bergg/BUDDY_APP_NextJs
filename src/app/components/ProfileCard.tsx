import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col  gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={48}
          height={48}
          
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-25 flex flex-col gap-2 items-center">
        <span className="font-semibold"> Ernesto Hemingway</span>
        <div className="flex items-center gap-4">
            <div className="flex">
            <Image
          src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={12}
          height={12}
          
          className="rounded-full object-cover w-3 h-3 "
        />
        <Image
          src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={12}
          height={12}
          
          className="rounded-full object-cover w-3 h-3 "
        />
        <Image
          src="https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={12}
          height={12}
          
          className="rounded-full object-cover w-3 h-3 "
        />
            </div>
            <span className="text-gray-500 text-sm">658 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
            My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
