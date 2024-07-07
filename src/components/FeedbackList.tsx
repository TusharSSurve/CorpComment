import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks').then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    }).then(data => {
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    }).catch(error => {
      setErrorMsg(error.message);
      setIsLoading(false);
    })
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {feedbackItems.map(feedback => (<FeedbackItem feedbackItem={feedback} key={feedback.id} />
      ))}
    </ol>
  )
}
