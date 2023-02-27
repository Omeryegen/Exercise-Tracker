import {useState, createContext } from "react";
import uuid from 'react-uuid'


const ContextProvider = createContext()

export const Provider = ({children})=>{
    const [getExInput, setgetExInput] = useState("")
    const [user, setUser] = useState(null)
    const [params, setParams] = useState({})
    const [datas, setDatas] = useState([])
    const [userKg, setuserKg] = useState("")
    const [userHeight, setuserHeight] = useState("")
    const [userGender, setuserGender] = useState("")
    const [userAge, setuserAge] = useState("")
    const [totals, settotals] = useState({totalCal:0,tatalTime:0,})
    const [dates, setDates] = useState([])

    const capitalize = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

    /*Handle History*/
    const getDates = ()=>{
        datas.forEach(element =>{
            if(!dates.includes(element.date)){
                dates.push(element.date)
            }
        })
        setDates(dates)
    }
    
    /*Handle Totals*/
    const handleTotals = ()=>{
        let cal = 0
        let time = 0
        datas.forEach(element =>{
            cal += element.calories
            time += element.duration
        })
        settotals({totalCal: cal,totalTime: time})
    }
    /*HANDLE USER*/
    const getUser = () =>{
        setUser({
            gender: userGender,
            weight_kg:userKg,
            height_cm: userHeight,
            age: userAge
        })
    }
    const handleKg = (e)=>{
        setuserKg(e.target.value)
    }
    const handleHeight = (e)=>{
        setuserHeight(e.target.value)
    }
    const handleGender = (e)=>{
        setuserGender(e.target.value)
    }
    const handleAge = (e)=>{
        setuserAge(e.target.value)
    }
    
    /*HANDLE EX SUBMİT*/
    const onExChange = (e)=>{
        setgetExInput(e.target.value)
        setParams({
            gender: user.gender,
            weight_kg: user.weight_kg,
            height_cm: user.height_cm,
            age: user.age,
            query: e.target.value
        })
        
    }

    const onExSubmit = ()=> {
        if(getExInput.length < 4){
            console.log('Error')
        }else {
            fetchExercises()
            setgetExInput("")
        }
    }

    /*Fetch Handling */
    const fetchExercises = async function (){  
        const response = await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "x-app-id": process.env.REACT_APP_ID,
            "x-app-key": process.env.REACT_APP_PASSWORD,
            "Content-Type": "application/json"
            }
        });
        const data = await response.json()
        console.log(data)
        let newObject = {}
        data.exercises.forEach(element => {
                newObject = {
                id: uuid(),
                date: new Date(Date.now()).toLocaleString().split(',')[0].split(' ')[0],
                name: capitalize(element.name),
                duration: element.duration_min,
                calories: element.nf_calories
            }    
            datas.push(newObject)
            setDatas(datas)
            setParams([])
            handleTotals()
            getDates()
        });
    };




    return (
        <ContextProvider.Provider value={{
            params,
            datas,
            onExChange,
            onExSubmit,
            getExInput,
            userKg,
            userHeight,
            userGender,
            userAge,
            handleAge,
            handleKg,
            handleHeight,
            handleGender,
            getUser,
            user,
            totals,
            dates
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default ContextProvider