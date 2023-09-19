import {ReactNode} from "react";
import HomeIcon from "../components/icons/HomeIcon.tsx";
import ExploreIcon from "../components/icons/ExploreIcon.tsx";
import NotificationIcon from "../components/icons/NotificationIcon.tsx";
import MessagesIcon from "../components/icons/MessagesIcon.tsx";
import BookmarkIcon from "../components/icons/BookmarkIcon.tsx";
import ListsIcon from "../components/icons/ListsIcon.tsx";
import ProfileIcon from "../components/icons/ProfileIcon.tsx";
import MoreIcon from "../components/icons/MoreIcon.tsx";


export type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
};
export const NAVBAR_ITEMS: NavItem[] = [
    {
        label: "Home",
        href: "/home",
        icon: <HomeIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Explore",
        href: "/explore",
        icon: <ExploreIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Notifications",
        href: "/notifications",
        icon: <NotificationIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Messsages",
        href: "/messages",
        icon: <MessagesIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Lists",
        href: "/lists",
        icon: <ListsIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Bookmarks",
        href: "/bookmarks",
        icon: <BookmarkIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "Profile",
        href: "/profile",
        icon: <ProfileIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
    {
        label: "More",
        href: "/more",
        icon: <MoreIcon className="md:mr-6 w-6 h-6 hidden sm:block" />,
    },
];