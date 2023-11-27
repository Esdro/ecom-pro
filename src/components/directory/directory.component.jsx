import { CategoryItem } from "../category-item/category-item.component"

import React from "react";
export default function Directory({ categories }) {

    return (
        <div className="container overflow-hidden text-center py-5 ">
            <div className="row g-3 align-items-center justify-content-lg-start justify-content-md-center ">
                {categories.map((cat) => {
                    return <div className=" col-md-5 col-lg-4" key={cat.id}>
                        <CategoryItem category={cat} key={cat.id} />
                    </div>
                })}
            </div>
        </div>
    )


}