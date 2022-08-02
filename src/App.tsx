import { Footer } from "./components/Footer";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";
import "./App.css";
import { useEffect, useState } from "react";

type adviceProps = {
  id: number;
  advice: string;
};
const App = () => {
  const [text, setText] = useState<adviceProps>();
  const url = "https://api.adviceslip.com/advice";

  const handleAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setText(data.slip);
  };
  useEffect(() => {
    handleAdvice();
  }, []);

  return (
    <main className="App">
      <div className="app-device">
        <h5>Advice #{text?.id}</h5>
        <p>{text?.advice}</p>
        <img src={dividerDesktop} alt="divider desktop" />
      </div>
      <div className="App__icon--image">
        <img src={iconDice} alt="icon-dice" onClick={handleAdvice} />
      </div>
      <Footer />
    </main>
  );
};

export default App;
