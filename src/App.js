import logo from "./logo.svg";
import "./App.css";
import UserInterface from "./components/UserInterface";
import StylesContext from "./contexts/StylesContext";
import CollectorButton from "./components/CollectorButton";

function App() {
  const style = {
    background: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15,
  };
  return (
    <main>
      <StylesContext.Provider value={style}>
        <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50,
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <h3>We Carry the latest and greatest editions of your favorite comic books! Are you a collector?</h3>
        <CollectorButton />
        <h3>Have a special request? Click here to fill out our form</h3>
        <UserInterface />
      </StylesContext.Provider>
    </main>
  );
}

export default App;
