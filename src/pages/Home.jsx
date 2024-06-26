import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Header from "../routes/layouts/Shared/Header";
import LeftSideNav from "../routes/layouts/Shared/LeftSideNav";
import Navbar from "../routes/layouts/Shared/Navbar";
import RightSideNav from "../routes/layouts/Shared/RightSideNav";
import Newscard from "./Newscard";


const Home = () => {

    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews> </BreakingNews>
            <Navbar></Navbar>
            <h2>This is home</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                    </div>
                <div className="lg:col-span-2 ">
                    <h3>News coming soon</h3>

                    <div className="mb-4">
                        {
                             news.map(aNews => <Newscard key={aNews.id} news={aNews}></Newscard>)
                        }
                    </div>
                
                </div>
                <div className=""> <RightSideNav></RightSideNav> </div>
            </div>
        </div>
    );
};

export default Home;