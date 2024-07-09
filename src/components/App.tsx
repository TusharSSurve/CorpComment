import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./HashtagList";
import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";

export default function App() {

  return (
    <div className="app">

      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  )
}
