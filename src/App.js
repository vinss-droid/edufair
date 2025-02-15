import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
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
import {useQueryURL} from "./Utils/Utils";
import ShortLink from "./pages/ShortLink";
import {Analytics} from "@vercel/analytics/react";
import Countdown from "./components/event/silogy/Countdown";
import Questionnaire from "./components/Questionnaire";
import RegisterSilogy from "./components/event/silogy/register/RegisterSilogy";
import RegisterTalkshow from "./components/event/silogy/register/talkshow/RegisterTalkshow";
import LinkTreeTalkshow from "./components/event/silogy/talkshow/LinkTreeTalkshow";

function App() {

    const PrivateRoute = ({ children }) => {

        const location = useLocation()
        const queryURL = useQueryURL()

        if (!isAuthenticated()) {
            return <Navigate
                to={`${queryURL.get('next') === null ? `/auth/login?next=${location.pathname}` : `/auth/login?${queryURL.get('next')}`}`}
            />;
        }

        return <>{children}</>;
    };

    const RedirectAfterLogin = ({ children }) => {

        const location = useLocation()
        const queryURL = useQueryURL()

        if (isAuthenticated()) {
            // return window.location.reload()
            return <Navigate
            to={`${queryURL.get('next') !== null ? queryURL.get('next') : '/'}`}
            // state={{from: location}}
            replace
            />;
        }

        return <>{children}</>;
    };

  return (
      <Router>
          <div className="App select-none">
              <Analytics />
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/workshop-pbb" element={<ShortLink to="/event/workshop/daftar" />} />
                  <Route exact path="/silogy-expo" element={<Countdown />}/>
                  <Route exact path="/silogy-expo/talkshow" element={<LinkTreeTalkshow />}/>
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

                  {/* Global Route */}
                  <Route exact path="/event/:event/questionnaire" element={
                      <PrivateRoute>
                          <Questionnaire />
                      </PrivateRoute>
                  } />

                  {/* Webinar Routes */}
                  <Route exact path="/event/webinar/daftar" element={
                      <PrivateRoute>
                          <RegisterWebinar />
                      </PrivateRoute>
                  } />

                  {/* Workshop Routes */}
                  <Route exact path="/event/workshop/daftar" element={
                      <PrivateRoute>
                          <RegisterWorkshop />
                      </PrivateRoute>
                  } />

                  {/* Silogy Routes */}
                  {/*<Route exact path="/event/silogy-expo/daftar/:types" element={*/}
                  {/*    <PrivateRoute>*/}
                  {/*        <RegisterSilogy />*/}
                  {/*    </PrivateRoute>*/}
                  {/*} />*/}

                  <Route exact path="/event/silogy-expo/talkshow/daftar/:types" element={
                      <PrivateRoute>
                          <RegisterTalkshow />
                      </PrivateRoute>
                  } />

              </Routes>
              <BottomNavbar />
              <Footer />
          </div>
      </Router>
  );
}

export default App;
