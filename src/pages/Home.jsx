import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import "../styles/Home.css";
import { HomeSection } from "../data/HomeSection";
import { CoursesSection } from "../data/CoursesSection";
import { TutorsSection, tutorList } from "../data/TutorsSection";
import { PartnersSection, PartnersList } from "../data/PartnersSection";
import parse from "html-react-parser";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={HomeSection.image} />
          <div className="kolom">{parse(HomeSection.content)}</div>
        </section>

        {/* online courses section */}
        <section id="courses">
          <div className="kolom">{parse(CoursesSection.contenct)}</div>
          <img src={CoursesSection.image} />
        </section>

        {/* tutor section */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(TutorsSection.content)}</div>
            <Tutors tutorList={tutorList} />
          </div>
        </section>

        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(PartnersSection.content)}</div>
            <Partners PartnersList={PartnersList} />
          </div>
        </section>
      </div>

      {/* contact */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
