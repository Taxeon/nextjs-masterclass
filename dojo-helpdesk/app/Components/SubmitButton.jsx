'use client'
import { useFormStatus} from 'react-dom'


export default function SubmitButton({PendingText}) {
  const { pending} = useFormStatus()
  return (
    <button className="btn-primary" disabled={pending}>
      {pending && <span>{PendingText}</span>}
      {!pending && <span>Submit</span>}
    </button>
  )
}
