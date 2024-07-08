type MessageProps = {
  message: string
}
export default function ErrorMessage({ message }: MessageProps) {
  return (
    <div>{message}</div>
  )
}
