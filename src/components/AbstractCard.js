import React from "react-router-dom"

function AbstractCard( {abstract}) {

    return (
        <article>
            <h4>{abstract.title}</h4>
            <h5>{abstract.artist}  {abstract.date}</h5>
                <img src={abstract.image}
                     alt={abstract.artist}
                     width="100%" height="100%"
                />
           
        </article>
    )
}

export default AbstractCard