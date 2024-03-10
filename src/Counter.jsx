import { useState } from "react"

export default function Counter() {
    const [Count, setCount] = useState(10);

    const add = () => {
        let newCount = Count + 1;
        setCount(newCount)
    }
       function reduce(){
        let newCount = Count - 1;
        setCount(newCount) 
       }
    return (
        <div style={{ border: '1px solid tomato ', padding: '20px'}}>
            <h2>Counter : {Count}</h2>
            <button onClick={add}>add</button>
            <button onClick={reduce}>reduce</button>
        </div>
    )
}