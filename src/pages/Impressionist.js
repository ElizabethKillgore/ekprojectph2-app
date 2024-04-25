import { useOutletContext } from "react-router-dom"
import ImpressionistCard from '../components/ImpressionistCard'

function Impressionist() {

    const contextObj = useOutletContext()
    console.log(contextObj)
    const {impressionists} = contextObj
    
    const impressionistInfo = impressionists.map(impressionist => 
        <ImpressionistCard key={impressionist.id} impressionist={impressionist}/>)
    
    return (
        <main> 
            <h3>Impressionist Paintings</h3>
             {impressionistInfo}    
        </main>
    )
}

export default Impressionist

