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

        {showHub && <Hub onGoHome={() => setShowHub(false)}/>}
          
      </main>
    </>
  );
}

export default App;
