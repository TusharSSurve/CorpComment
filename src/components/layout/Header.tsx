import FeedbackForm from "../feedback/FeedbackForm";
type HeaderProps = {
  handleAddToList: (text: string) => void
}
export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <img src="https://bytegrad.com/course-assets/js/1/pattern.svg" alt="pattern" className="pattern" />
      <a href="/" className="logo"><img src="https://bytegrad.com/course-assets/js/1/logo.svg" alt="logo" /></a>
      <h1>Give Feedback. <span>Publicly.</span></h1>
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  )
}
