import { TriangleUpIcon } from "@radix-ui/react-icons"
import { TFeedbackItem } from "../../lib/types"
import { useState } from "react"

type FeedbackItemsProps = {
  feedbackItem: TFeedbackItem
}

export default function FeedbackItem({ feedbackItem }: FeedbackItemsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount(prev => prev + 1)
    e.currentTarget.disabled = true;
    e.stopPropagation();
  }
  return (
    <li onClick={() => setIsOpen(prev => !prev)} className={`feedback ${isOpen ? 'feedback--expand' : ''}`}>
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
    </li>
  )
}
