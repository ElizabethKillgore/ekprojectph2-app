import { Outlet, useOutletContext } from "react-router-dom"

function AbstractContainer( {abstract}) {
    const abstracts = useOutletContext()

    console.log(abstracts)

    return (
        <article>
            <h4>{abstract.title}</h4>
            <h5>{abstract.artist}  {abstract.date}</h5>
                <img src={abstract.image}
                     alt={abstract.artist}
                     width="100%" height="100%"
                />
           <Outlet context={abstracts} />
        </article>
    )
}

export default AbstractContainer