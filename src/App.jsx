import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import SignInPage from "./pages/sign-in-page/SignInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
