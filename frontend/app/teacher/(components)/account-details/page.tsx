import EngagementRate from "./components/engagement-rate"
import General from "./components/general"
import OtherInfo from "./components/other-info"
import Settings from "./components/settings"
import SocialAccounts from "./components/social-accounts"


const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] flex flex-col space-y-[3rem]'>
         <General />
         <OtherInfo />
      </div>
      <div className='flex-[1] flex flex-col space-y-10'>
         <EngagementRate />
         <SocialAccounts />
         <Settings />
     </div>
    </div>
  )
}

export default page