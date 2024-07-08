export type TFeedbackItem = {
  id: number
  upvoteCount: number,
  badgeLetter: string,
  company: string,
  text: string,
  daysAgo: number
}

export type ContainerProps = {
  feedbackItems: TFeedbackItem[],
  isLoading: boolean,
  errorMsg: string,
  handleAddToList: (text: string) => void
}

export type ContainerProps1 = {
  feedbackItems: TFeedbackItem[],
  isLoading: boolean,
  errorMsg: string,
}