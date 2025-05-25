import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import CountTool from "./counterTool";
import Theme from "./theme";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="counter" element={<CountTool/>}/>
      <Route path="theme" element={<Theme/>}/>

      </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
};
export default App;