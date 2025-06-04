import HeroSection from "../common/hero-section"
import CategorySection from "./components/category-section"
import TrendingNow from "./components/trending-now"
import MostWatched from "./components/most-watched"
import Sidebar from "./components/sidebar"
import CommunityDiscussions from "./components/community-discussion"
import Footer from "../common/footer"

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center space-x-3">
        <div className="">
          <TrendingNow />
          <MostWatched />
        </div>
        <div className="">
          <Sidebar />
        </div>
      </div>
      <div className="bg-white lg:px-[10rem] py-8 mt-5">
        <CommunityDiscussions />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage