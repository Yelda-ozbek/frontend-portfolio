import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { useTheme } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
   
    

      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <ToastContainer />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
