import { useContext } from 'react'
import ContextProvider from '../Context'


function SignUp() {
    const {userKg, userHeight, userAge, userGender, handleKg, handleHeight, handleAge, handleGender, getUser} = useContext(ContextProvider)
  return (
    <div className="sign-up">
        <div className="form">
            <form onSubmit={(e)=>{
                if(userKg > 0 && userHeight > 0 && userAge > 0 && userGender !== "" ){
                    getUser()
                }
            e.preventDefault()
        } }>
            <div className="input-group">
                <input onChange={(e)=>{
                    handleAge(e)
                }} value={userAge} placeholder='Age' type="number" />
            </div>
            <div className="input-group">
                <input onChange={(e)=>{
                    handleKg(e)
                }} value={userKg} type="number" placeholder='Weight(Kg)' />
            </div>
            <div className="input-group">
                <input onChange={(e)=>{
                    handleHeight(e)
                }} value={userHeight} type="number" placeholder='Height(Cm)' />
            </div>
            <div className="input-group">
            <select onChange={(e)=>{
                handleGender(e)
            }} value={userGender} name="select" id="select">
                <option value="choose">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </div>
            <button>Confirm</button> 
            </form>
        </div>
    </div>
    
  )
}

export default SignUp