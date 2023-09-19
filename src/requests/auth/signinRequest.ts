export const SIGNIN_REQUEST_FROM = [
    { id: "username", title: "Username", type: "text" },
    { id: "password", title: "Password", type: "password" },
]


export default async function signinRequest(formdata: FormData): Promise<JwtTokenValidationResponse> {
    const requestBody = Object.fromEntries(
        SIGNIN_REQUEST_FROM.map(item => [item.id, formdata.get(item.id) as string])
    )

    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/token`,
        {
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${getJwtToken()}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(res => {
            // if (res.status == 401)
            //     window.location.replace("/signin")
            // if (!res.ok)
            //     console.log(res.statusText)

            return res.json()
        })
}