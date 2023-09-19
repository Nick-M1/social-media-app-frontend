type UserDetails = {
    id: string
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    profileImage: string
    headerImage: string
    descriptionBio: string
    websiteUrl: string

    createdAt: string
    modifiedAt: string
}

type UserNode = {
    id: string
    userId: string
    following: UserNodeRelationship[]
    likedPosts: PostNode[]
}

type UserNodeRelationship = {
    id: string
    followedUser: UserNode
    createdAt: number
}

type PostNode = {
    id: string
    userCreatedBy: UserNode
}

type CommentNode = {
    id: string
    createdAt: number
    description: string
    isDeleted: boolean
    parentComment?: CommentNode
    post: PostNode
    userCreatedBy: UserNode
}

type Post = {
    id: string
    createdAt: number
    modifiedAt: number
    userId: string
    description: string
    tags: string[]
    images: string[]
}

type JwtTokenValidationResponse = {
    id: string
    jwtToken: string
    role: string
}