import Navbar from "@/components/Navbar";
import Hero from "@/components/Home";
import About from "@/components/About";
import Book from "@/components/Book"
import Sermon from "@/components/sermon"
import Ministry from "@/components/Ministry"
export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <About/>
      <Sermon/>
      <Book/>
      <Ministry/>
   </>
  );
}
