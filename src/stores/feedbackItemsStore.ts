import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[],
  isLoading: boolean,
  errorMsg: string,
  selectedCompany: string,
  getCompanyList: () => string[],
  getFilteredFeedbackItems: () => TFeedbackItem[],
  addToList: (text: string) => Promise<void>,
  selectCompany: (company: string) => void,
  fetchFeedbackItems: () => void,
}
export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMsg: '',
  selectedCompany: '',
  getCompanyList: () => {
    return get().feedbackItems.map(item => item.company).filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
  },
  getFilteredFeedbackItems: () => {
    return get().selectedCompany ? get().feedbackItems.filter(item => item.company === get().selectedCompany) : get().feedbackItems
  },
  addToList: async (text: string) => {
    const companyName = text.split(' ').find(word => word.includes('#'))!.substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }
    set(state => ({ feedbackItems: [...state.feedbackItems, newItem] }))

    await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks', {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company
    }))
  },
  fetchFeedbackItems: () => {
    set(() => ({
      isLoading: true
    }));
    fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks').then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    }).then(data => {
      set(() => ({
        isLoading: false,
        feedbackItems: data.feedbacks
      }));
    }).catch(error => {
      set(() => ({
        isLoading: false,
        errorMsg: error.message
      }));
    })
  }
}));