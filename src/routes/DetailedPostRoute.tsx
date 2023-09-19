import PostComponent from "../components/posts/PostComponent.tsx";
import {useLoaderData} from "react-router-dom";
import getPostById from "../requests/post/getPostById.ts";
import getUserdetailsByUsername from "../requests/user-details/getUserdetailsByUsername.ts";
import getUserdetailsByJwt from "../requests/user-details/getUserdetailsByJwt.ts";
import getUsernodeByUserId from "../requests/user-node/getUsernodeByUserId.ts";

export async function loader({ params: { username, postId } }: { params: { username: string, postId: string } }) {
    const thisUserDetails = await getUserdetailsByJwt()
    const thisUserNode = await getUsernodeByUserId(thisUserDetails.id)

    const post = await getPostById(postId)
    const authorUserDetails = await getUserdetailsByUsername(username)
    // const authorUserNode = await getUsernodeByUserId(authorUserDetails.id)

    return { thisUserDetails, thisUserNode, authorUserDetails, post }
}

export function Component() {
    const { thisUserDetails, thisUserNode, authorUserDetails, post } = useLoaderData() as Awaited<ReturnType<typeof loader>>
console.log(thisUserNode)
    return (
        <section className='min-h-screen'>
            <PostComponent post={post} thisUserDetails={thisUserDetails} thisUserNode={thisUserNode} authorUserDetails={authorUserDetails} />
        </section>
    )
}