
import React from "react";
export const CategoryItem = ({ category }) => {

    const { id, title } = category
    return (
        <div className="category-container card p-2  "  key={id}>
            <div className="card-image">
                <img src={`https://robohash.org/1?set=set${id}`} alt={title} className="img-fluid card-img-top " />
            </div>
            <div className="card-body">
                <h3> {title} </h3>
                <a href={'#'}  className=" card-link"> Shop now  </a>
            </div>
        </div>
    )


}