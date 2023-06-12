import {setTitle} from "../helper/Utills";
import Header from "../components/home/Header"
import Events from "../components/home/Events";
import Contact from "../components/home/Contact";
import {Helmet} from "react-helmet";

const Home = () => {

    setTitle('')

    return (
        <div>
            <Header />
            <Events />
            <Contact />
        </div>
    );
};

export default Home;
