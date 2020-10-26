import React from 'react'
import image from './profile/photo.jpg'
import './App.css';
import Component from './profile/component'; 

const  handlName = (event)=> {
  alert('my name is   : ' + props.name)
  event.preventDefault();
}

function App (props) {
  return (
    <div className="App">
     <Component  name="" bio="" prof="" handlName={handlName()} src={image}/>
      
    </div>
  );
}

export default App;

