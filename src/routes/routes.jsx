import UserRoot from "../pages/User/UserRoot";
import Home from "../pages/User/Home"
import Basket from "../pages/User/Basket"
import Favorites from "../pages/User/Favorites"
import Books from "../pages/User/Books"
import BookDetail from "../pages/User/BookDetail"



const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"books",
                element:<Books/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            },
            {
                path:"BookDetail",
                element:<BookDetail/>
            }
        ]
    }
]

export default ROUTES