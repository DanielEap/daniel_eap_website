import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Head from "./components/Head";
function App() {
  return (
    <div>
      <Head />
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
