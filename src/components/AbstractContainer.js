import { Outlet, useOutletContext } from "react-router-dom"

function AbstractContainer( {abstract }) {
    const abstracts = useOutletContext()

    console.log(abstracts)

    return (
        <article>
            <h4>{abstract.title}</h4>
            <div>
                <img src={abstract.image_url}
                     alt={abstract.artist}
                      width="100%" height="100%"
                />
            </div>
           <Outlet context={abstracts} />
        </article>
    )





}


export default AbstractContainer