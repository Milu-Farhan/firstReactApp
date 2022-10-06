import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './css/main.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
