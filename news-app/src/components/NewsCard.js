import React from "react";
import { Link } from "react-router-dom";

function NewsCard({bookName, bookThumbnail, bookId}){
    return(
        <div className="card" style={{width: 18 + "rem"}}>
            <img src={bookThumbnail} className="card-img-top" alt=" "/>
            <div className="card-body">
                 <h5 className="card-title">{bookName}</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to={'/book/'+ {bookId}} className="btn btn-success">More Info</Link>
             </div>
        </div>
    )
};

export default NewsCard;