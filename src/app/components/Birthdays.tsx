import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col  gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Bithdays</span>
      </div>
      {/* BOTTOM */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold">Wayne Brunee</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
            Wish
          </button>
        </div>
      </div>
      {/* UPCOMING BIRTHDAYS */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col g">
          <span className="font-semibold text-gray-700">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 15 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
