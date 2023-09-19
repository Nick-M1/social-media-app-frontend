import CommentIcon from "../icons/CommentIcon.tsx";
import RetweetIcon from "../icons/RetweetIcon.tsx";
import LikeIcon from "../icons/LikeIcon.tsx";
import ShareIcon from "../icons/ShareIcon.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import updatePostLike from "../../requests/post-node/updatePostLike.tsx";



type Props = {
    post: Post

    thisUserDetails: UserDetails
    thisUserNode: UserNode
    authorUserDetails: UserDetails
}

export default function PostComponent({ post, thisUserDetails, thisUserNode, authorUserDetails }: Props) {
    const counts: { [k: string]: number } = {
        comments: 10, retweets: 25, likes: 21
    }
    const [isLiked, setIsLiked] = useState(thisUserNode.likedPosts.some(node => node.id == post.id))
    const updateLikeOnPost = async () => {
        await updatePostLike(thisUserDetails.id, post.id, !isLiked)
        setIsLiked(prev => !prev)
    }

    const POST_TILES = [
        { id: 'comments', title: 'Comments', className: 'hover:text-blue-400', icon: <CommentIcon className="w-5 h-5 mr-2"/>, onClick: () => {} },
        { id: 'retweets', title: 'Retweets', className: 'hover:text-green-400', icon: <RetweetIcon className="w-5 h-5 mr-2"/>, onClick: () => {} },
        { id: 'likes', title: 'Likes', className: 'hover:text-red-400', icon: <LikeIcon className="w-5 h-5 mr-2"/>, onClick: updateLikeOnPost },
        { id: 'share', title: 'Share', className: 'hover:text-blue-400', icon: <ShareIcon className="w-5 h-5 mr-2"/>, onClick: () => {} },
    ]

    return (
        <Link to={`/profile/${authorUserDetails.username}/${post.id}`}>
            <div className='hover:bg-gray-800 smooth-transition'>
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <Link to={`/profile/${authorUserDetails.username}`} className="flex-shrink-0 group block">
                        <div className="flex items-center">
                            <img className="inline-block h-10 w-10 rounded-full border border-white/10 shadow-lg shadow-white/10" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
                            <div className="ml-2">
                                <p className="text-base leading-6 font-medium text-white">
                                    { authorUserDetails.firstName } { authorUserDetails.lastName }
                                    <span className="text-sm ml-2 leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                        @{authorUserDetails.username} · 16 April
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="ml-16">
                    <p className="text-smaller text-white flex-shrink">
                        { post.description }
                        {/*Day 07 of the challenge <a href="#" className="text-blue-400">#100DaysOfCode</a>*/}
                        {/*I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building*/}
                        {/*Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.*/}
                        {/*[07/100]*/}
                        {/*<a href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>*/}
                    </p>

                    <div className="md:flex-shrink pr-6 pt-3">
                        { post.images.map(image =>
                            <img key={image} className="w-full h-full rounded-xl border border-white/10 shadow-xl shadow-white/5" src={image} alt=""/>
                        )}

                    </div>


                    <div className="flex items-center py-4 px-4">
                        { POST_TILES.map(item => (
                            <Link key={item.id} to='#' className='flex-1'>
                                <button onClick={item.onClick} className={`flex items-center text-xs text-gray-400 smooth-transition ${item.className}`}>
                                    { item.icon }
                                    { counts[item.id] }
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}