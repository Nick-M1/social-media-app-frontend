import ProfilePage from "../components/profile/ProfilePage.tsx";
import getPostsByUserId from "../requests/post/getPostsByUserId.ts";
import {useLoaderData} from "react-router-dom";
import getUserdetailsByJwt from "../requests/user-details/getUserdetailsByJwt.ts";
import getUsernodeByUserId from "../requests/user-node/getUsernodeByUserId.ts";

export async function loader() {
    const thisUserDetails = await getUserdetailsByJwt()
    const thisUserNode = await getUsernodeByUserId(thisUserDetails.id)

    const posts = await getPostsByUserId(thisUserDetails.id)

    return { thisUserDetails, thisUserNode, posts }
}

export function Component() {
    const { thisUserDetails, thisUserNode, posts } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    return (
        <ProfilePage isThisUsersProfile={true} thisUserDetails={thisUserDetails} thisUserNode={thisUserNode} authorUserDetails={thisUserDetails} authorUserNode={thisUserNode} posts={posts}/>
    )
}