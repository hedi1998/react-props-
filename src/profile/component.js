import React from 'react'

const component = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.bio}</div>
            <div>{props.prof}</div>
            <div className='picture'>
      <img src={props.src} className='picture'/>
      {props.children}
    </div>
        </div>
    )
}

export default component
