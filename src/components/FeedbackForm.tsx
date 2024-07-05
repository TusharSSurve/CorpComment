export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea name="" id="feedback-textarea" placeholder="Enter your feedback" spellCheck={false} />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
