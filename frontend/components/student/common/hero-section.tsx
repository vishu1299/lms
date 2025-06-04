import Image from "next/image"

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center pt-9 px-4 mx-3 sm:mx-5 md:mx-8'>
        <Image src="/Broadcast.png" alt="Broadcast banner" width={4000} height={340} className="object-cover" />
    </div>
  )
}

export default HeroSection