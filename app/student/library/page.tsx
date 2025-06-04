import HeroSection from "../common/hero-section"
import FiltersSidebar from "./components/filters-sidebar"
import LibrarySection from "./components/library-section"
import Footer from "../common/footer"
import CategorySection from "../home/components/category-section"

const page = () => {
  return (
    <div> 
       <LibrarySection />
      <Footer />
    </div>
  )
}

export default page