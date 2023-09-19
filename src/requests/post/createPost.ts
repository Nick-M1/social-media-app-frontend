import {getJwtToken} from "../../logic/jwt-token-logic.ts";

export type NewPostRequest = {
    userId: string
    description: string
    tags: string[]
    images: string[]
}

export const NEWPOST_REQUEST_FROM = [
    { id: "description", title: "Description", type: "text" },
    { id: "tags", title: "Tags", type: "list" },
    { id: "images", title: "Images", type: "list" }
]

export default async function createPost(userId: string, description: string, tags: string[], images: string[]): Promise<Post> {
    const requestBody: NewPostRequest = {
        userId, description, tags, images
    }

    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/post`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${getJwtToken()}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(res => {
            if (res.status == 401)
                window.location.replace("/signin")
            if (!res.ok)
                console.log(res.statusText)

            return res.json()
        })
}