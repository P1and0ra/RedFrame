import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heroes from "./components/Heroes/Heroes";
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
          </main>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default App;
