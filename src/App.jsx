import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import SignUpOrLogIn from "./pages/signuporlogin/SignUpOrLogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignUpOrLogIn></SignUpOrLogIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
