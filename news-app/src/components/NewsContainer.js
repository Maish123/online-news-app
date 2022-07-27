import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({newsItems}){
    return(
        <div className="container">
            <div className="row">
                {newsItems.map((newsItem)=>{
                    return(
                        <NewsCard
                        key={newsItem.id}
                        news={newsItem}
                        />
                    )
                })}
            </div>
        </div>
    
    )
}

export default NewsContainer;