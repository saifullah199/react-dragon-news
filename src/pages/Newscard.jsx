import { Link } from "react-router-dom";


const Newscard = ({news}) => {

    const {title, image_url, details, _id} = news ;
    return (
        <div>
                <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    {
        details.length > 200 
    ? <p> {details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold"> Read More...</Link> </p>
        : <p> {details} </p>
    }
  </div>
</div>
        </div>
    );
};

export default Newscard;