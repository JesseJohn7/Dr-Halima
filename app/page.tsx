import Navbar from "@/components/Navbar";
import Hero from "@/components/Home";
import About from "@/components/About";
import Book from "@/components/Book"
import Sermon from "@/components/sermon"
import Ministry from "@/components/Ministry"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <About/>
      <Sermon/>
      <Book/>
      <Ministry/>
      <Contact/>
      <Footer/>
   </>
  );
}
