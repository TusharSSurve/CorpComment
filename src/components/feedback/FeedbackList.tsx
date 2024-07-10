import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  // const { isLoading, errorMsg, filteredFeedbackItems } = useFeedbackItemsContext();
  const isLoading = useFeedbackItemsStore(state => state.isLoading);
  const errorMsg = useFeedbackItemsStore(state => state.errorMsg);
  const filteredFeedbackItems = useFeedbackItemsStore(state => state.getFilteredFeedbackItems());
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {filteredFeedbackItems.map(feedback => (<FeedbackItem feedbackItem={feedback} key={feedback.id} />
      ))}
    </ol>
  )
}
