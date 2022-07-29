import React from "react";

function NewsCard({news,deletedItem}){
    const{author,content,imageUrl,title, id}= news

    //function that handles the onclick function

    function handleDelete(){
        console.log("I have been deleted")
        fetch(`http://localhost:3000/information/${news.id}`,{
            method: "DELETE",
        })
        .then((resp)=>resp.json())
        .then(()=>deletedItem(news))
    }

    return(
        <div className="col">
            <div className="card" style={{width: 18 + "rem"}}>
                <img src={imageUrl} className="card-img-top" alt=" "/>
                <div className="card-body">
                    <h5 className="card-title"> By -{author}</h5>
                    <p className="card-text">{title}</p>
                    <div className="buttons">
                        <button className="button btn-1">More Info</button>
                        <button className="button btn-2" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewsCard;