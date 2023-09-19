import {getJwtToken} from "../../logic/jwt-token-logic.ts";

export default async function getPostsByUserId(userId: string, pageNumber: number = 0): Promise<Post[]> {
    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/post/user/${userId}?pageNumber=${pageNumber}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getJwtToken()}`
            }
        })
        .then(res => {
            if (res.status == 401)
                window.location.replace("/signin")
            if (!res.ok)
                console.log(res.statusText)

            return res.json()
        })
}