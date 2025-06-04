import HeroSection from "../common/hero-section"
import Footer from "../common/footer"
import TermsRules from "./components/page"
import CategorySection from "../home/components/category-section"
const page = () => {
  return (
    <div>
      <div className="px-11">
         <TermsRules />
      </div>
      <Footer />
    </div>
  )
}

export default page