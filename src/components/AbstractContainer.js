import { Outlet, useOutletContext } from "react-router-dom"

function AbstractContainer( {abstract}) {
    const abstracts = useOutletContext()

    return (
        <article>
            <h4>{abstract.title}</h4>
            <h5>{abstract.artist}  {abstract.date}</h5>
            <div>
                <img src={abstract.image}
                     alt={abstract.artist}
                      width="100%" height="100%"
                />
            </div>
           <Outlet context={abstracts} />
        </article>
    )

}


export default AbstractContainer