import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

export default function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(state => state.fetchFeedbackItems);
  useEffect(() => {
    fetchFeedbackItems()
  }, [fetchFeedbackItems])
  return (
    <div className="app">

      <Footer />
      {/* <FeedbackItemsContextProvider> */}
      <Container />
      <HashtagList />
      {/* </FeedbackItemsContextProvider> */}
    </div>
  )
}
