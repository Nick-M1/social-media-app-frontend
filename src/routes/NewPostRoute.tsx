import {NEWPOST_REQUEST_FROM} from "../requests/post/createPost.ts";


export function Component() {
    return (
        <div>
            { NEWPOST_REQUEST_FROM.map((item) => (
                <div key={item.id}>
                    <label htmlFor={item.id} className='font-bold text-white text-xl'>{ item.title }</label>
                    <input className="w-full p-2 input-primary-valid" placeholder={item.title} type={item.type} name={item.id} id={item.id} />
                </div>
            ))}
        </div>
    )
}