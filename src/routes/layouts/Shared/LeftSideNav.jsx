import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link 
                    className="block ml-4 text-xl font-semibold px-4"
                    key={category.id}>
                     {category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;