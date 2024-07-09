import { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";

type TFeedbackItemsContext = {
  isLoading: boolean,
  errorMsg: string,
  companyList: string[],
  filteredFeedbackItems: TFeedbackItem[],
  handleAddToList: (text: string) => void,
  handleSelectCompany: (text: string) => void,
}

type TFeedbackItemCP = {
  children: React.ReactNode
}
export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null);

export default function FeedbackItemsContextProvider({ children }: TFeedbackItemCP) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredFeedbackItems = useMemo(() =>
    selectedCompany ? feedbackItems.filter(item => item.company === selectedCompany) : feedbackItems
    , [feedbackItems, selectedCompany])

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company)
  }

  const companyList = useMemo(() =>
    feedbackItems.map(item => item.company).filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
    , [feedbackItems]);

  const handleAddToList = async (text: string) => {
    const companyName = text.split(' ').find(word => word.includes('#'))!.substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }
    setFeedbackItems([...feedbackItems, newItem])

    await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks', {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks').then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    }).then(data => {
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    }).catch(error => {
      setErrorMsg(error.message);
      setIsLoading(false);
    })
  }, []);

  return (
    <FeedbackItemsContext.Provider value={{
      isLoading,
      errorMsg,
      companyList,
      filteredFeedbackItems,
      handleAddToList,
      handleSelectCompany
    }}>{children}</FeedbackItemsContext.Provider>
  )
}
