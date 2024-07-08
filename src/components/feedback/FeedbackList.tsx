import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { ContainerProps1 } from "../../lib/types";

export default function FeedbackList({ feedbackItems, isLoading, errorMsg }: ContainerProps1) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {feedbackItems.map(feedback => (<FeedbackItem feedbackItem={feedback} key={feedback.id} />
      ))}
    </ol>
  )
}
