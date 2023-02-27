import { useContext } from "react"
import ContextProvider from "../Context"
import { Link } from "react-router-dom"
import List from "./List"
function Form() {
    const {onExChange, onExSubmit, getExInput,totals} = useContext(ContextProvider)


  return (
    <>
        <div className="ex-input">
            <form onSubmit={(e)=>{
                e.preventDefault()
                onExSubmit()
            }}>
                <div className="input-group">
                    <label htmlFor="exercises">Which exercises have you done today?</label>
                    <input onChange={(e)=>{
                        onExChange(e)
                    }} value={getExInput} type="text" name="exercises" id="exercises" />
                    <button>Send</button>
                </div>   
                <p><span></span></p>
            </form>
            <div className="statistics">
                <p><span>Burned Calories:</span> {totals.totalCal} <span>Total Duration: </span>{totals.totalTime}</p>
                <Link to="/history" >History</Link> 
            </div>
        </div>
        <div className="container">
           
        </div>
        <List/>
        
    </>
  )
 
}

export default Form
/*
<div className="user-profile">
<img src="" alt="" />
<p><span>Age:</span> {user.age}</p>
<p><span>Weight:</span> {user.weight_kg}</p>
<p><span>Height:</span> {user.height_cm}</p>
<p><span>Gender:</span> {user.gender}</p>
</div>*/