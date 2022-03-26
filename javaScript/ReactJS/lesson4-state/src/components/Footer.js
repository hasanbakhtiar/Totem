import React  from "react";

const Footer =({text,title})=>{
    return(
        <div className="container mt-3">
            <h1>{title}</h1>
            {text}
        </div>
    )
}
export default Footer;