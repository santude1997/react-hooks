import "./App.css";
import Useeffect from "./Components/hooks/Useeffect/Useeffect";
import Usememo from "./Components/hooks/Usememo/Usememo";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Usestate from "./Components/hooks/Usestate/Usestate";

function App() {
  return (
    <>
      <Header />
      <Usestate />
      <Useeffect/>
      <Usememo />
      <Footer/>
      
    </>
  );
}

export default App;
