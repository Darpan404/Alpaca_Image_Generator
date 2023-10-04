import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Work from "./Component/Work/Work"
import Team from "./Component/Team/Team";
import Client from "./Component/Clients/Client";
import Contact from "./Component/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro></Intro>
      <Services></Services>
      <About></About>
      <Experience></Experience>
      <Work></Work>
      <Team></Team>
      <Client></Client>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
