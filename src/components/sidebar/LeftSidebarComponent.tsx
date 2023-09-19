import {NAVBAR_ITEMS} from "../../constants/navbar-items.tsx";
import {Link} from "react-router-dom";
import TwitterIcon from "../icons/TwitterIcon.tsx";
import UserProfile from "./UserProfile.tsx";
import PostTweetIcon from "../icons/PostTweetIcon.tsx";

export default function LeftSidebarComponent() {
    return (
        <header className="bg-gray-950 flex-grow text-white h-12 py-4">
            <div className="overflow-y-auto fixed h-screen pr-3 lg:w-[225px]">
                <TwitterIcon className="h-8 w-8 text-white ml-3 hidden sm:block"/>

                <nav className="mt-5 px-2">
                    { NAVBAR_ITEMS.map(item =>
                        <Link key={item.href} to={item.href} className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300">
                            { item.icon }
                            <span className='hidden lg:block'>{ item.label }</span>
                        </Link>
                    )}

                    <Link to='/newpost' className='hidden sm:block'>
                        <button className="bg-blue-400 hover:bg-blue-500 lg:w-full mt-5 ml-0.5 lg:ml-0 text-white font-bold p-1 lg:py-2 lg:px-4 rounded-full smooth-transition">
                            <PostTweetIcon className='h-8 w-8 text-white hidden sm:block lg:hidden fill-white'/>
                            <span className='hidden lg:block'>Tweet</span>
                        </button>
                    </Link>
                </nav>

                <div className="absolute bottom-[2rem]">
                    <UserProfile imageClassName='hidden sm:block sm:-ml-1 lg:ml-0' textClassName='hidden lg:block'/>
                </div>
            </div>
        </header>
    )
}