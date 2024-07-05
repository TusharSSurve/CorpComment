import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>S</p>
        </div>
        <div>
          <p>StarBucks</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro perferendis repellat culpa molestias veniam tempore dolorum unde, ratione alias? Perferendis eaque, quibusdam molestiae reprehenderit animi aperiam eligendi inventore voluptatibus in sed alias, voluptatum quia esse porro necessitatibus, rerum vero aut? Architecto et rerum esse dicta quam, saepe quaerat vel?</p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  )
}
