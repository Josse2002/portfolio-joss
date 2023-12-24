import "./App.css";
import { Header } from "./assets/components/header/Header";
import { Projects } from "./assets/views/Projects";
import { Resume } from "./assets/components/Resume/Resume";
import { Timeline } from "./assets/views/Timeline";	
import { GetTouch } from "./assets/views/getTouch";
import { AboutMe } from "./assets/views/AboutMe";
import { I18nextProvider } from 'react-i18next';
import i18n from "./assets/lang/i18n";
function App() {

  return (
    <div className="bg-white-bg flex flex-col justify-center items-center">
      <div className="w-full lg:w-1/2">
      <I18nextProvider i18n={i18n}>
        <Header />
        <Resume />
        <AboutMe />
        <Timeline />
        <Projects />
        <GetTouch />
      </I18nextProvider>
      </div>
    </div>
  );
}

export default App;
