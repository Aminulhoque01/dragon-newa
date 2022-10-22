import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Catagory/Catagory/Category";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Register from "../../Pages/Register/Register";
import Profile from "../../Pages/Shared/others/Profile/Profile";
import TremsAndCondition from "../../Pages/Shared/others/TremsAndCondition/TremsAndCondition";
import PrivetRout from "../PrivetRoute/PrivetRout";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivetRout><News></News></PrivetRout>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TremsAndCondition></TremsAndCondition>
            },
            {
                path:'/profile',
                element:<PrivetRout><Profile></Profile></PrivetRout>
            }
        ]
    }
])