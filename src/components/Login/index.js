import {useState} from "react"

import "./index.css"
const Login=()=>{
const[name,setName]=useState(true);

const onLock=()=>{
    setName(prevName=>!prevName)
}
const unLock=()=>{
    setName(prevState=>!prevState)
}

const lockElement=()=>{
return(<div className="card">
    {name? <img src="https://assets.ccbp.in/frontend/hooks/lock-img.png" alt="lock"/> :<img src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"alt="unlock"/>}
    {name?<p className="p">Your device is locked</p>:<p className="p" >your device is unlocked</p>}
    {name?<button type="button" className="but" onClick={onLock}>unLock</button>:<button type="button" onClick={unLock} className="but" >lock</button>}
</div>
)
}

return(
    <div >
        {lockElement()}
    </div>
)
}

export default Login