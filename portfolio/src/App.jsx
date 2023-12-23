import "./App.css";
import { Header } from "./assets/components/header/Header";
import { Projects } from "./assets/views/Projects";
import { Resume } from "./assets/components/Resume/Resume";
import { Timeline } from "./assets/views/Timeline";	

function App() {
  
  return (
    <div className="bg-white-bg flex flex-col justify-center items-center">
      <div className="w-full lg:w-1/2">
        <Header />
        <Resume />
        <Timeline />
        <Projects />
      </div>
    </div>
  );
}

export default App;
