import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Impressionist from "./pages/Impressionist"
import Abstract from "./pages/Abstract"
import NewPaintingForm from "./pages/NewPaintingForm"


const routes = [
    {
        path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

        {
            path: "/impressionist",
            element: <Impressionist />
        },
        {
            path: "/abstract",
            element: <Abstract />
        },
        {
            path: "/newPaintingForm",
            element: <NewPaintingForm />
        }
    
        
        ]

    
    }
]

export default routes