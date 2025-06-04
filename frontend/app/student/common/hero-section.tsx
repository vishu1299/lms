import Image from "next/image"

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center pt-9'>
        <Image src="/Broadcast.png" alt="Broadcast banner" width={4000} height={340} className="object-cover" />
    </div>
  )
}

export default HeroSection