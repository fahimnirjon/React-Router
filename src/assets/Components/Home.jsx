import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    return (
        <div className= "container mx-auto border border-green-400 text-center rounded-2xl bg-cyan-400 mt-10 p-4">
            <h2>Home sweet Home</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;