import MediaIcon from "../icons/MediaIcon.tsx";
import GifIcon from "../icons/GifIcon.tsx";
import EmojiIcon from "../icons/EmojiIcon.tsx";
import MapPinIcon from "../icons/MapPinIcon.tsx";
import createPost from "../../requests/post/createPost.ts";
import {useFormFields} from "../../hooks/useFormFields.ts";
import {useNavigate} from "react-router-dom";

const NEWPOST_TILES = [
    { id: 'media', text: 'Media', icon: <MediaIcon className="text-center h-7 w-6"/> },
    { id: 'gif', text: 'GIF', icon: <GifIcon className="text-center h-7 w-6"/> },
    { id: 'emoji', text: 'Emoji', icon: <EmojiIcon className="text-center h-7 w-6"/> },
    { id: 'geolocation', text: 'Location', icon: <MapPinIcon className="text-center h-7 w-6"/> }
]

const regex = new RegExp(`#\\w+`, 'g')

type Props = {
    userId: string
    username: string
    profileImage: string
}

export default function NewPostComponent({ userId, username, profileImage }: Props) {
    // const [formdata, setFormdata] = useState<NewPostRequest>({ description: '', tags: [], images: [] })

    const navigate = useNavigate()

    const [formdata, updateFormdata] = useFormFields({ description: '' })
    const onCreateNewPost = async () => {
        if (formdata.description == '')
            return

        const tags = formdata.description.match(regex)?.map(r => r) ?? []
        await createPost(userId, formdata.description, tags, [])
            .then(post => navigate(`/profile/${username}/${post.id}`))

    }

    return (
        <aside>
            <div className="flex mx-2 mt-1">
                <img className="m-2 h-10 w-10 rounded-full" src={profileImage} alt=""/>
                <textarea id='description' className="flex-grow px-2 pt-2 mt-2 bg-transparent border border-white/5 rounded-lg text-gray-300 placeholder-gray-400 font-medium text-lg scrollbar" placeholder="What's happening?" rows={3} value={formdata.description} onChange={updateFormdata}/>
            </div>

            <div className="flex justify-between py-2 items-center">
                <div className="w-10"/>
                <div className="flex items-center px-2">
                    { NEWPOST_TILES.map(item => (
                        <button key={item.id} title={item.text} className="text-center m-2 mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                            { item.icon }
                        </button>
                    ))}
                </div>

                <button onClick={onCreateNewPost} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                    Tweet
                </button>
            </div>
        </aside>
    )
}