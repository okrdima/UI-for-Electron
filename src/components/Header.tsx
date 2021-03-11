import {useState} from "react";

interface HeaderProps  {
buttonText?:string
}

const Header = ({buttonText}:HeaderProps)=>{
    const [count,setCount] = useState(0)
    const implement = ()=>{
        setCount(count+1)
    }
return (
    <div>
        <h1>Header</h1>
        <button onClick={implement}>{buttonText ||"Default"}</button>
        <p>{count}</p>
    </div>
  )
}
export default Header