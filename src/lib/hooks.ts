import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error('FeedbackItemsContext is not defined in component')
  }
  return context;
}

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
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
  return { feedbackItems, isLoading, errorMsg, setFeedbackItems }
}