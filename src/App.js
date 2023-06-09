import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BottomNavbar from "./components/layouts/BottomNavbar";
import Footer from "./components/layouts/Footer";
import Webinar from "./pages/Webinar";
import Workshop from "./pages/Workshop";
import NotFound from "./components/errors/NotFound";
import SilogyExpo from "./pages/SilogyExpo";
import Contest from "./components/event/silogy/contest/Contest";
import Talkshow from "./components/event/silogy/talkshow/Talkshow";
import Exhibition from "./components/event/silogy/exhibition/Exhibition";
import RegisterWebinar from "./components/event/webinar/register/RegisterWebinar";
import RegisterWorkshop from "./components/event/workshop/register/RegisterWorkshop";
import Navbar from "./components/layouts/Navbar";
import {isAuthenticated} from "./helper/Auth";

function App() {

    const PrivateRoute = ({ children }) => {

        if (!isAuthenticated()) {
            return <Navigate to="/auth/login" />;
        }

        return <>{children}</>;
    };

    const RedirectAfterLogin = ({ children }) => {

        if (isAuthenticated()) {
            return <Navigate to="/" />;
        }

        return <>{children}</>;
    };

  return (
      <Router>
          <div className="App select-none">
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/event/webinar" element={<Webinar />} />
                  <Route exact path="/event/workshop" element={<Workshop />} />
                  <Route exact path="/event/silogy-expo" element={<SilogyExpo />} />
                  <Route exact path="/event/silogy-expo/lomba" element={<Contest />} />
                  <Route exact path="/event/silogy-expo/talkshow" element={<Talkshow />} />
                  <Route exact path="/event/silogy-expo/pameran" element={<Exhibition />} />
                  <Route exact path="*" element={<NotFound />} />

                  {/*Redirect After Login*/}
                  <Route exact path="/auth/login" element={
                      <RedirectAfterLogin>
                          <Login />
                      </RedirectAfterLogin>
                  } />

                  {/*Private Route*/}
                  <Route exact path="/event/webinar/daftar" element={
                      <PrivateRoute>
                          <RegisterWebinar />
                      </PrivateRoute>
                  } />
                  {/*<Route exact path="/event/workshop/daftar" element={*/}
                  {/*    <PrivateRoute>*/}
                  {/*        <RegisterWorkshop />*/}
                  {/*    </PrivateRoute>*/}
                  {/*} />*/}

              </Routes>
              <BottomNavbar />
              <Footer />
          </div>
      </Router>
  );
}

export default App;
