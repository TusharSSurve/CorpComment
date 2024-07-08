import { ContainerProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";


export default function Container({ feedbackItems, isLoading, errorMsg, handleAddToList }: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList feedbackItems={feedbackItems} isLoading={isLoading} errorMsg={errorMsg} />
    </main>
  )
}
