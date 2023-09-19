import HomeComponent from "../components/home/HomeComponent.tsx";
import getUserdetailsByJwt from "../requests/user-details/getUserdetailsByJwt.ts";
import {useLoaderData} from "react-router-dom";

export async function loader() {
    const user = await getUserdetailsByJwt()

    return { user }
}

export function Component() {
    const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    return (
        <HomeComponent user={user}/>
    )
}