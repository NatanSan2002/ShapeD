import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./assets/components/Globals/Navbar/Navbar";
import Footer  from "./assets/components/Globals/Footer/Footer";

import Centralizer from "./assets/components/Globals/Centralizer/Centralizer";

import Home from "./assets/components/Pages/Home/home";

function App() {
  return (
    <BrowserRouter>
<Navbar/>

<main>

<Centralizer>

<Routes>
<Route exact path="/" element={<Home/>}>



</Route>

</Routes>

</Centralizer>
</main>

<Footer/>
</BrowserRouter> 
    
  );
}

export default App;
