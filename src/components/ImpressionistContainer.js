
import { Outlet, useOutletContext} from "react-router-dom"



function ImpressionistContainer({impressionist, handleAddPainting}) {
    const impressionists = useOutletContext()
    
    console.log(impressionists)

    return (
        <article>
            <h4>{impressionist.title}</h4>
            <h5>{impressionist.artist}  {impressionist.date}</h5>
                <img src={impressionist.image}
                     alt={impressionist.artist}
                      width="100%" height="100%"
                />
           <Outlet context={impressionists} />
           {handleAddPainting}
        </article>
    )
}

export default ImpressionistContainer