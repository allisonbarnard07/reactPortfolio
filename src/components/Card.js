import React from "react";


function Card(props){
return (
    <div>
        <img className="" src={props.items.imgSrc} alt={props.item.imgSrc} />
    </div>
)
}

export default Card;