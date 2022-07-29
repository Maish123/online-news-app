import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({newsItems,deletedItem}){
    return(
        <div className="container">
            <div className="row">
                {newsItems.map((newsItem)=>{
                    return(
                        <NewsCard
                        key={newsItem.id}
                        news={newsItem}
                        deletedItem={deletedItem}
                        />
                    )
                })}
            </div>
        </div>
    
    )
}

export default NewsContainer;