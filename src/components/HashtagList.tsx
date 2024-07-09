import { useFeedbackItemsContext } from "../lib/hooks";



export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map(item => {
        return <li key={item} ><button onClick={() => handleSelectCompany(item)}>#{item}</button></li>
      })}
    </ul>
  )
}
