import {Link} from "react-router-dom";

type Props = {
    imageClassName?: string
    textClassName?: string
}

export default function UserProfile({ imageClassName, textClassName }: Props) {
    return (
        <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-4 py-3 mt-12 mr-2">
            <Link to='/profile' className="flex-shrink-0 group block">
                <div className="flex items-center">
                    <img className={`inline-block h-12 w-12 rounded-full ${imageClassName}`} src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt=""/>
                    <div className={`ml-3 ${textClassName}`}>
                        <p className="text-base leading-6 font-medium text-white">
                            ℜ??????ℜ??????.dev
                        </p>
                        <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @Ricardo_oRibeir
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}