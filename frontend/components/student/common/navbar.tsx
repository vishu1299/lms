import Image from "next/image"
import Link from "next/link";
 
const Navbar = () => {
  return (
    <>
        <div className="flex items-center justify-center h-10 sm:h-15 mt-4 w-full">
          <Link href="/student/home">
          <Image src="/xcrino.png" alt="Logo" width={120} height={40}  className="cursor-pointer"
 />
          </Link>
        </div>
        <hr className="border-t border-gray-300" />
    </>
  )
}

export default Navbar