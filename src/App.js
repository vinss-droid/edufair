import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
import {AuthProvider, useIsAuthenticated} from "react-auth-kit";
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
import * as React from "react";

function App() {

    const PrivateRoute = ({ Component }) => {
        const isAuthenticated = useIsAuthenticated();
        const auth = isAuthenticated();
        return auth ? <Component /> : <Navigate to="/login" />;
    };

    const RedirectAfterLogin = ({ children }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isAuthenticated = useIsAuthenticated();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const location = useLocation();

        if (isAuthenticated()) {
            return <Navigate
                to={'/'}
                state={{from: location}}
                replace
            />;
        }

        return children

    };

  return (
    <div className="App select-none">
        <AuthProvider
            authType="localstorage"
            authName="_auth"
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >
            <Router>
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
                        <PrivateRoute loginPath='/auth/login' Component={<RegisterWebinar />} />
                    } />
                    <Route exact path="/event/workshop/daftar" element={
                        <PrivateRoute loginPath='/auth/login' Component={<RegisterWorkshop />} />
                    } />

                </Routes>
                <BottomNavbar />
                <Footer />
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
