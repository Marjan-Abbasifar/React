import { useEffect, useState } from "react"

function CountdownTimer({initialCount}){
    const[counter, setCounter]=useState(initialCount)

    useEffect(()=>{
        if(counter===0) return;
        const timer= setTimeout(()=>{
            setCounter(counter-1)

        },1000)

        return()=> clearTimeout(timer)

    },[counter])

    return(
        <div>
            <h2>Count Down: {counter}</h2>
            {counter === 0 && <p>Time is up!</p>}

        </div>
    )
}
 
    export default CountdownTimer