
import React from "react";
export default function Button (buttonType,buttonTextContent, buttonClasses, buttonOnChangeHandler) {

    return (
        <button
            type={buttonType}
            className={buttonClasses}
           onChange={buttonOnChangeHandler}
        >
            {buttonTextContent}
        </button>
    )

}