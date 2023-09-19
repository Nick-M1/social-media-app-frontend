import {getJwtToken} from "../../logic/jwt-token-logic.ts";

export default async function getUserdetailsByUsername(username: string): Promise<UserDetails> {
    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/info/username/${username}`,
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