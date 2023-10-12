import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
