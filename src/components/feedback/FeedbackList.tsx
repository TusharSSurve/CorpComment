import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function FeedbackList() {
  const { isLoading, errorMsg, filteredFeedbackItems } = useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {filteredFeedbackItems.map(feedback => (<FeedbackItem feedbackItem={feedback} key={feedback.id} />
      ))}
    </ol>
  )
}
