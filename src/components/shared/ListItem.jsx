import React from 'react'

function ListItem({element}) {
  return (
    <div className="list-group-box">
        <p><span>Exercise:</span> {element.name}</p>
        <p><span>Duration:</span> {element.duration} minutes</p>
        <p><span>Burned Calories:</span> {element.calories}</p>
    </div>
  )
}

export default ListItem