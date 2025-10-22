import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heroes from "./components/Heroes/Heroes";
import FootMain from "./components/FootMain/foot-main";
import MainContent from "./components/MainContent/main-content";

function App() {
  return (
    <>
      <div>
        <div>
          <header>
            <Navbar></Navbar>
          </header>
        </div>
        <div>
          <main>
            <Heroes></Heroes>
            <FootMain></FootMain>
          </main>
        </div>
        <div>
          <main>
            <MainContent></MainContent>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;