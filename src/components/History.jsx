import React from 'react'
import ContextProvider from '../Context'
import { useContext } from 'react'
import ListItem from './shared/ListItem'
import uuid from 'react-uuid'
function History() {
    const {dates, datas} = useContext(ContextProvider)
  
    return (
        dates.map(element =>{  
            return(
                <div  key={uuid()}   className="histories">
                    <h2  >{element}</h2>
                        <div className="histories-box">                
                    {
                        datas.map(data =>{
                            if(data.date === element){   
                                return (
                                     <ListItem key={uuid()} element={data}></ListItem>
                                )
                            }
                        })
                    }
                     </div>
                </div>                               
            )
        })
    ) 
}

export default History