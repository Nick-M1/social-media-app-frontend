import {getJwtToken} from "../../logic/jwt-token-logic.ts";

export default async function updatePostLike(userId: string, postId: string, isLiked: boolean): Promise<UserNode> {
    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/social/post/like?userId=${userId}&postId=${postId}&isLiked=${isLiked}`,    //todo not working
        {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${getJwtToken()}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            // if (res.status == 401)
            //     window.location.replace("/signin")
            if (!res.ok)
                console.log(res.statusText)

            return res.json()
        })
}