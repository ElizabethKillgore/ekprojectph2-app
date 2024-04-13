import App from "./App"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Impressionist from "./pages/Impressionist"
import Abstract from "./pages/Abstract"

const routes = [
    {
        path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/impressionist",
            element: <Impressionist />
        },
        {
            path: "abstract",
            element: <Abstract />
        }
         
    ]

    
    }
]

export default routes