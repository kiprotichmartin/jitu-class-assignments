import './App.css';

import MinusOne from "./components/Decrement";
import AddOne from "./components/Increment";

function App() {

  // const number = () => {return prompt("Enter")};

  return (
    <div className="App">
      <AddOne />
      <MinusOne />
    </div>
  );
}

export default App;
