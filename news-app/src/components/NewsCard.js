import React from "react";
import { Link } from "react-router-dom";

function NewsCard({news,onDeletedPoem}){
    const{author,content,imageUrl,title, id}= news

    //function that handles the onclick function

    function handleDelete(){
        fetch(`http://localhost:3000/information/${id}`,{
            method: "DELETE",
        })
        .then((resp)=>resp.json())
        .then(()=>onDeletedPoem(poem))
    }

    return(
        <div className="col">
            <div className="card" style={{width: 18 + "rem"}}>
                <img src={imageUrl} className="card-img-top" alt=" "/>
                <div className="card-body">
                    <h5 className="card-title"> By -{author}</h5>
                    <p className="card-text">{title}</p>
                    <Link to={"/news/"+id} className="btn btn-success">More Info</Link>
                    <button className="like-button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default NewsCard;