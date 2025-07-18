type FormType = {
  name: string
  email: string
  message: string
}
type Props = {
  data: FormType[]
}

export function ShowList({ data }: Props) {
  if (data.length === 0) {
    return <p>No submissions yet.</p>
  }

  return (
    <>
      <h2>All Submissions</h2>
      <ul>
        {data.map((entry, index) => (
          <li key={index} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Message:</strong> {entry.message}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
