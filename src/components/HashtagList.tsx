import { useFeedbackItemsStore } from "../stores/feedbackItemsStore"

export default function HashtagList() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore(state => state.getCompanyList());
  const handleSelectCompany = useFeedbackItemsStore(state => state.selectCompany)
  return (
    <ul className="hashtags">
      {companyList.map(item => {
        return <li key={item} ><button onClick={() => handleSelectCompany(item)}>#{item}</button></li>
      })}
    </ul>
  )
}
