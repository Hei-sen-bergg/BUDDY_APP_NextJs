import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {


  return (
    <div className='h-24 flex items-center justify-between'>


      <div className="font-bold text-xl text-blue-600">
        <Link href="/">BUDDY</Link>
      </div>


      <div className="hidden"></div>


      <div className="">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar