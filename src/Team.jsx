import { useState } from "react"

export default function Team() {
    const [count, setTeam] = useState(11);
    
    function AddPlayer(){
        const newPlayer = count + 1;
        setTeam(newPlayer)
    }

    function removePlayer(){
        setTeam(count - 1)
    }
    const TeamStyle = {
        border: "1px solid  pink",
        margin: '20px',
        borderRadius: '16px',
        padding :"20px"
    }
    return (
        <div style={TeamStyle}>
            <h2>Players : {count}</h2>
            <button onClick={AddPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}