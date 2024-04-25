import React from "react-router-dom"

function ImpressionistCard({impressionist}) {
    
    return (
        <article>
            <h4>{impressionist.title}</h4>
            <h5>{impressionist.artist}  {impressionist.date}</h5>
                <img src={impressionist.image}
                     alt={impressionist.artist}
                     width="100%" height="100%"
                /> 
        </article>
    )
}

export default ImpressionistCard