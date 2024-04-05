import { useParams } from "react-router-dom";
import Header from "../routes/layouts/Shared/Header";
import RightSideNav from "../routes/layouts/Shared/RightSideNav";
import Navbar from "../routes/layouts/Shared/Navbar";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                        <h3 className="text-5xl">News Detail</h3>
                        <p> {id} </p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;