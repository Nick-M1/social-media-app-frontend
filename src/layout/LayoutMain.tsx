import {Outlet} from "react-router-dom";
import LeftSidebarComponent from "../components/sidebar/LeftSidebarComponent.tsx";
import RightSidebarComponent from "../components/sidebar/RightSidebarComponent.tsx";


export default function LayoutMain() {
    return (
        <div className='bg-gray-950 scrollbar md:px-10 grid grid-cols-sidebar-collapsed sm:grid-cols-sidebar-small md:grid-cols-sidebar-medium lg:md:grid-cols-sidebar-large transition-[grid-template-columns] duration-300 ease-in-out'>
            <LeftSidebarComponent/>
            <Outlet/>
            <RightSidebarComponent/>
        </div>
    )
}