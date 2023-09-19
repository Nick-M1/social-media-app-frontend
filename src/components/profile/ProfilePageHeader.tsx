import ArrowLeftIcon from "../icons/ArrowLeftIcon.tsx";
import {useNavigate} from "react-router-dom";

export default function ProfilePageHeader() {
    const navigate = useNavigate()

    const navigateBackwards = () => navigate(-1)

    return (
        <div className="flex justify-start py-1">
            <div className="px-4 py-2 mx-2">
                <button onClick={navigateBackwards} className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                    <ArrowLeftIcon className="m-2 h-6 w-6"/>
                </button>
            </div>
            <div className="mx-2">
                <h2 className="mb-0 text-xl font-bold text-white">ℜ??????ℜ??????.dev</h2>
                <p className="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
            </div>
        </div>
    )
}