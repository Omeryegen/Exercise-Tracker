
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import SignUp from "./components/SignUp";
import ContextProvider from "./Context";
import { useContext } from "react";
import History from "./components/History";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const {user} = useContext(ContextProvider)

  if(user === null){
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<SignUp/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    )
  }else {
    return(
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Form/>}></Route>
          <Route path="/history" element={<History/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
        
    ) 
  }

}

export default App;
