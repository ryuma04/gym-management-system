"use client"
import { useState } from "react"

export default function Home() {

  const [name,setName] = useState<string>("")
  const [plan,setPlan] = useState<string>("")
  const [members,setMembers] = useState<any[]>([])

  const addMember = () => {
    const newMember = {
      id: Date.now(),
      name,
      plan
    }

    setMembers([...members, newMember])
    setName("")
    setPlan("")
  }

  const deleteMember = (id:number) => {
    setMembers(members.filter(m => m.id !== id))
  }

  return (
    <div style={{padding:"20px"}}>

      <h2>Gym Member Form</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Plan"
        value={plan}
        onChange={(e)=>setPlan(e.target.value)}
      />

      <button onClick={addMember}>
        Add
      </button>

      <h3>Members</h3>

      {members.map((m)=>(
        <div key={m.id}>
          {m.name} - {m.plan}
          <button onClick={()=>deleteMember(m.id)}>Delete</button>
        </div>
      ))}

    </div>
  )
}


