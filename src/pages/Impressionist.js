import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Outlet, useOutletContext  } from "react-router-dom"
import ImpressionistContainer from '../components/ImpressionistContainer'

function Impressionist() {

    const impressionists = useOutletContext()
    
    // const [impressionists, setImpressionists] = useState([])
    // const params = useParams
    // const impressionistId = params.id

    // useEffect(() => {
    //     fetch("http://localhost:3000/impressionists")
    //     .then(r => r.json())
    //     .then((impressionistData) => setImpressionists(impressionistData))
    //     .catch((error => console.error(error)))
    // }, [impressionistId])

    const impressionistInfo = impressionists.map(impressionist => 
         <ImpressionistContainer key={impressionist.id} impressionist={impressionist}/>)
    

   return (
     
        <main> 
            <h3>Impressionist Paintings</h3>
             <Outlet />
             {impressionistInfo}    
        </main>
   )
}

export default Impressionist

//title={impressionist.title} artist={impressionist.artist} image_url={impressionist.image_url}