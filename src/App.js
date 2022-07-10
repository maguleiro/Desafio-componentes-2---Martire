import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ClickTracker from "./components/ClickTracker";


function App() {
  return(
    <>
      <NavBar name={"menu"} />
      <Title />
      <ClickTracker />
    </>
);
}



export default App;
