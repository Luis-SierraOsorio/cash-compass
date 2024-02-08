import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import SignIn from "./pages/sign-in-page/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
