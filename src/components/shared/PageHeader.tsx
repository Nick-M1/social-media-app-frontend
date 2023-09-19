import SparklesIcon from "../icons/SparklesIcon.tsx";
import {Link} from "react-router-dom";

type Props = {
    title: string
}

export default function PageHeader({ title }: Props) {
    return (
        <div className="flex justify-between py-1">
            <h2 className="mx-2 px-4 py-2 text-xl font-semibold text-white">{ title }</h2>
            <Link to='#' className="p-2 mx-2 text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                <SparklesIcon className="m-2 h-6 w-6"/>
            </Link>
        </div>
    )
}