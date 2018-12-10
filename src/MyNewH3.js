import React from 'react'

const MyNewH3 = (props) =>{
  return (
      <div>
        <h1>{props.title}</h1>
        <a href={`${props.placeToGo}`}>{props.websiteName}</a>
      </div>


  )
}

export {MyNewH3}
