export const SIGNUP_REQUEST_FROM = [
    { id: "username", title: "Username", type: "text" },
    { id: "password", title: "Password", type: "password" },
    { id: "firstName", title: "First Name", type: "text" },
    { id: "lastName", title: "Last Name", type: "text" },
    { id: "email", title: "Email", type: "email" },
    { id: "phoneNumber", title: "Phone Number", type: "tel" },
    { id: "profileImage", title: "Profile Image Url", type: "text" },
    { id: "headerImage", title: "Profile Image Url", type: "text" },
    { id: "descriptionBio", title: "Profile Image Url", type: "text" },
    { id: "websiteUrl", title: "Profile Image Url", type: "text" },
]

export default async function createUser(formdata: FormData): Promise<UserDetails> {
    const requestBody = Object.fromEntries(
        SIGNUP_REQUEST_FROM.map(item => [item.id, formdata.get(item.id) as string])
    )

    return await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/auth`,
        {
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${getJwtToken()}`,
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