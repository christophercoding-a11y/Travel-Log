import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const Card =(props)=> {



    return (
        <div className="col">
            <div className="card travel-card h-100">
                <img src={props.imgUrl}alt="placeholder img" className="img-fluid image card-img-top rounded" />
                <div className="card-header">
                    <h2 className="card-heading display-4">{props.location}</h2>
                </div>
                <div className="card-body">
                <p className="card-text">{props.year}</p>
                <p className="card-text description">{props.description}</p>
        </div>
        <div className="card-footer">
            { props.isFavorite ? <BsHeartFill /> : <BsHeart />}
        </div>
            </div>
        </div>
    )
}

export default Card