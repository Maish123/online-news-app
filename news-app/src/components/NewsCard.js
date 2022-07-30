import React, { useState } from "react";

function NewsCard({news}){
    const{author,content,imageUrl,title, id}= news

    const[contentVisible,setContentVisible]= useState(false)

    //function that handles the onclick function

    // function handleDelete(){
    //     console.log("I have been deleted")
    //     fetch(`http://localhost:3000/information/${news.id}`,{
    //         method: "DELETE",
    //     })
    //     .then((resp)=>resp.json())
    //     .then(()=>deletedItem(news))
    // }

    return(
        // className="col" to return it to three per row grid
        <div>
            <div className="card" style={{width: 18 + "rem"}}>
                <img src={imageUrl} className="card-img-top" alt=" "/>
                <div className="card-body">
                    <h5 className="card-title"> By -{author}</h5>
                    <p className="card-text">{title}</p>
                    <div className="buttons">
                        <button className="button btn-1">More Info</button>
                        {/* <button className="button btn-2" onClick={handleDelete}>Delete</button> */}
                    </div>
                        <div>hello!</div>
                </div>
            </div>
        </div>
    )
};

export default NewsCard;