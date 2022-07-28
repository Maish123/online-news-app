import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({newsItems,onDeleteItem}){
    return(
        <div className="container">
            <div className="row">
                {newsItems.map((newsItem)=>{
                    return(
                        <NewsCard
                        key={newsItem.id}
                        news={newsItem}
                        onDeleteItem={onDeleteItem}
                        />
                    )
                })}
            </div>
        </div>
    
    )
}

export default NewsContainer;