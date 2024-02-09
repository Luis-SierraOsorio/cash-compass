import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import RegisterPage from "./pages/register-page/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
