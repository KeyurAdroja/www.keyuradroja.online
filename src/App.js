import Home from "./Pages/Home";
import "./App.css";
import RouterPage from "./Pages/RouterPage";
import Footer from "./Pages/Footer";

import Navbarnew from "./Pages/Navbarnew";

function App() {
  return (
    <div className="App">
      <Navbarnew />
      <RouterPage />
      <Footer />
    </div>
  );
}

export default App;
