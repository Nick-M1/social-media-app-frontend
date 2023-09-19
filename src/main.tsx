import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import LayoutMain from "./layout/LayoutMain.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route errorElement={<ErrorPage/>}>
            <Route index element={<Navigate to='/home' replace/>}/>
            <Route path='/signin' lazy={() => import("./routes/SigninRoute")}/>
            <Route path='/signup' lazy={() => import("./routes/SignupRoute")}/>

            <Route element={<LayoutMain/>}>
                <Route path='/home' lazy={() => import("./routes/HomeRoute")}/>
                <Route path='/newpost' lazy={() => import("./routes/NewPostRoute")}/>
                <Route path='/profile' lazy={() => import("./routes/ProfileMeRoute")}/>
                <Route path='/profile/:username' lazy={() => import("./routes/ProfileRoute")}/>
                <Route path='/profile/:username/:postId' lazy={() => import("./routes/DetailedPostRoute")}/>
            </Route>


            {/*<Route path='/profile' lazy={() => import("./pages/ProfilePage")}/>*/}
            {/*<Route path='/previousmatches' lazy={() => import("./pages/PreviousMatchesPage")}/>*/}
            {/*<Route path='/game/:gameid' lazy={() => import("./pages/GamePage")}/>*/}
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
