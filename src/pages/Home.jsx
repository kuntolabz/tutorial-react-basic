import Navbar from '../components/navbar'
import Footer from '../components/Footer';
import '../styles/Home.css';
import { HomeSection } from '../data/HomeSection';
import { CoursesSection } from '../data/CoursesSection';
import parse from 'html-react-parser';
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
            <img src={HomeSection.image}/>
            <div className="kolom">
                {parse(HomeSection.content)}
            </div>
        </section>

        {/* online courses section */}
         <section id="courses">
            <div className="kolom">
                {parse(CoursesSection.contenct)}
            </div>
            <img src={CoursesSection.image}/>
        </section>
        </div>
      <Footer />
    </>
  )
}

export default Home
