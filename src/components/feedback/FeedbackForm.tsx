import { useState } from "react"
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackProps = {
  onAddToList: (text: string) => void
}
export default function FeedbackForm({ onAddToList }: FeedbackProps) {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInValidIndicator, setShowInValidIndicator] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.includes('#') && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000)
    }
    else {
      setShowInValidIndicator(true)
      setTimeout(() => setShowInValidIndicator(false), 2000)
      return;
    }
    onAddToList(text)
    setText("")
  }
  return (
    <form className={`form ${showValidIndicator ? 'form--valid' : ''} ${showInValidIndicator ? 'form--invalid' : ''}`} onSubmit={handleSubmit}>
      <textarea value={text} name="" onChange={handleChange} id="feedback-textarea" placeholder="Enter your feedback" spellCheck={false} />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
