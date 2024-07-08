type HashtagProps = {
  companyList: string[]
  handleSelectCompany: (company: string) => void
}
export default function HashtagList({ companyList, handleSelectCompany }: HashtagProps) {
  return (
    <ul className="hashtags">
      {companyList.map(item => {
        return <li key={item} ><button onClick={() => handleSelectCompany(item)}>#{item}</button></li>
      })}
    </ul>
  )
}
