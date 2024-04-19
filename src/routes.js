import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Impressionist from "./pages/Impressionist"
import Abstract from "./pages/Abstract"
import NewImpressionistForm from "./pages/NewImpressionistForm"
import NewAbstractForm from "./pages/NewAbstractForm"

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
            path: "/newImpressionistForm",
            element: <NewImpressionistForm />
        },
        {
            path: "/newAbstractForm",
            element: <NewAbstractForm />
        }
        
        ]

    
    }
]

export default routes