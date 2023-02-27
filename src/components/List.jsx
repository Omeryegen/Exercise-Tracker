import { useContext } from "react"
import ContextProvider from "../Context"
import ListItem from "./shared/ListItem"

function List() {
    const {datas} = useContext(ContextProvider)
  if(datas.length !== 0){  
    return(
      <div className="list-group">
        <div className="container">  
          <div className="list-group-content">
              {
                datas.map((element) =>{
                  return (
                    <ListItem key={element.id} element={element}/>
                  )
                })
              }   
          </div> 
        </div> 
      </div> 
    )  
  }else {
    return (
      <div className="list-group">
         <div className="container">
          <p>You have 0 Exercises today!</p>
        </div>
      </div>
     
      
    )
  }
  
}

export default List