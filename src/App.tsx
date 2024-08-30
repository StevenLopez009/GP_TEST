import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { LayoutContainer } from "./styledComponents";

function App() {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
}

export default App;
