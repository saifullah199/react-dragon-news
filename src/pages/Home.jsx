import BreakingNews from "../BreakingNews";
import Header from "../routes/layouts/Shared/Header";
import LeftSideNav from "../routes/layouts/Shared/LeftSideNav";
import Navbar from "../routes/layouts/Shared/Navbar";
import RightSideNav from "../routes/layouts/Shared/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews> </BreakingNews>
            <Navbar></Navbar>
            <h2>This is home</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                    </div>
                <div className="lg:col-span-2 border"><h3>nEWS COMING soon</h3></div>
                <div className="border"> <RightSideNav></RightSideNav> </div>
            </div>
        </div>
    );
};

export default Home;