import { useEffect, useState } from "react"
import Member from "./Member"
import './Member.css'

export default function Members() {
    const [members, setMember] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMember(data))
    }, [])
    return (
        <div className="box-container">
            <h2>Members : {members.length}</h2>
            {
                members.map(member=><Member key={member.id} member={member}></Member>)
            }

        </div>
    )
}