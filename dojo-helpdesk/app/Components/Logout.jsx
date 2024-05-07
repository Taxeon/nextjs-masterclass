"use client"
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'


export default function Logout() {
  const router = useRouter()
  const handleLogout=async()=>{
    const supabase =createClient()
    const { error } = await supabase.auth.signOut()

    if (!error) {
      router.push('/login')
    }
    if (error) {
      console.log(error)
    }

  }
  return (
    <button className="btn-primary" onClick={handleLogout}>Logout</button>
  )
}
