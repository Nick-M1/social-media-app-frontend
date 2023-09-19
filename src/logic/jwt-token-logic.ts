const JWT_TOKEN_LOCALSTORAGE = "social-media-app-frontend-jwt-token"

export function getJwtToken(): string {
    const jwtToken = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE)
    if (jwtToken == null)
        window.location.replace("/signin")

    return jwtToken as string
}


export function setJwtToken(jwtToken: string) {
    localStorage.setItem(JWT_TOKEN_LOCALSTORAGE, jwtToken)
}