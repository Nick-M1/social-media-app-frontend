import ProfilePage from "../components/profile/ProfilePage.tsx";
import getPostsByUserId from "../requests/post/getPostsByUserId.ts";
import {useLoaderData} from "react-router-dom";
import getUserdetailsByUsername from "../requests/user-details/getUserdetailsByUsername.ts";
import getUserdetailsByJwt from "../requests/user-details/getUserdetailsByJwt.ts";
import getUsernodeByUserId from "../requests/user-node/getUsernodeByUserId.ts";

export async function loader({ params: { username } }: { params: { username: string } }) {
    const thisUserDetails = await getUserdetailsByJwt()
    const thisUserNode = await getUsernodeByUserId(thisUserDetails.id)

    const authorUserDetails = await getUserdetailsByUsername(username)
    const authorUserNode = await getUsernodeByUserId(authorUserDetails.id)
    const posts = await getPostsByUserId(authorUserDetails.id)
    // const authorUserDetails = await Promise.all(posts.map(post => getUsernodeByUserId(post.userId)))

    return { thisUserDetails, thisUserNode, authorUserDetails, authorUserNode, posts }
}

export function Component() {
    const { thisUserDetails, thisUserNode, authorUserDetails, authorUserNode, posts } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    return (
        <ProfilePage isThisUsersProfile={false} thisUserDetails={thisUserDetails} thisUserNode={thisUserNode} authorUserDetails={authorUserDetails} authorUserNode={authorUserNode} posts={posts}/>
    )
}