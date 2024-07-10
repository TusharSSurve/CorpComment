
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";
export default function Header() {
  // const { handleAddToList } = useFeedbackItemsContext();
  const handleAddToList = useFeedbackItemsStore(state => state.addToList);
  return (
    <header>
      <img src="https://bytegrad.com/course-assets/js/1/pattern.svg" alt="pattern" className="pattern" />
      <a href="/" className="logo"><img src="https://bytegrad.com/course-assets/js/1/logo.svg" alt="logo" /></a>
      <h1>Give Feedback. <span>Publicly.</span></h1>
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  )
}
