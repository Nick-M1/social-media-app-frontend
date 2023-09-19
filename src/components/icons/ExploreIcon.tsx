type Props = {
    className?: string
}

export default function ExploreIcon({ className }: Props) {
    return (
        <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
        </svg>
    )
}