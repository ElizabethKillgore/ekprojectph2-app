import { Link, Outlet, useOutletContext} from "react-router-dom"



function ImpressionistContainer({impressionist}) {
    const impressionists = useOutletContext()
    
    console.log(impressionists)

    return (
        <article>
            <h4>{impressionist.title}</h4>
            <div>
                <img src={impressionist.image_url}
                     alt={impressionist.artist}
                      width="100%" height="100%"
                />
            </div>
        
           <Outlet context={impressionists} />
        </article>
    )
}

export default ImpressionistContainer