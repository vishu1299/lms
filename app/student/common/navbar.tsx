 import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <header className="w-full h-16 border-b border-black/10">
      <div className="h-full flex items-center justify-between px-10">
        <Link href="/student/home" className="flex items-center pl-3">
          <Image
            src="/xcrino.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain mt-3"
          />
        </Link>
        
        <div className="flex items-center gap-4 h-full">
          <div className="relative w-10 h-10">
            <Image src="/profile.png" alt="userImage" fill className="object-contain" />
          </div>
          <div className="w-1 h-1/2 bg-[#4E4E4E]" />
          <Button className="bg-sky-350 text-white">Become Teacher</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
