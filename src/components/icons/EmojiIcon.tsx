type Props = {
    className?: string
}

export default function EmojiIcon({ className }: Props) {
    return (
        <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
        </svg>
    )
}