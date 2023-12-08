import "./App.css";
import { Header } from "./assets/components/header/Header";
import { Resume } from "./assets/components/Resume/Resume";

function App() {
  return (
    <div className="bg-white-bg flex flex-col justify-center items-center">
      <div className="w-1/2 ">
        <Header />
        <Resume />
      </div>
    </div>
  );
}

export default App;
