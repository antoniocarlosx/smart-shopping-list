import { useState } from "react";

//import "./App.css";
import LandingPage from "./components/LandingPage";
import Hub from "./components/Hub";

function App() {
  const [showHub, setShowHub] = useState(false);
  return (
    <>
      <main>
        {!showHub && <LandingPage onGetStarted={() => setShowHub(true)} />}

        {showHub && <Hub />}
          
      </main>
    </>
  );
}

export default App;
