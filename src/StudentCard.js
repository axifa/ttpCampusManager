import React from 'react';
import logo from './logo.svg';
import './App.css';

class StudentCard extends React.Component{

  render(){
    return (
      <div >
        <div className= "studentCardDiv">
           <img src="https://next.bncollege.com/wp-content/uploads/2016/10/Student-with-Textbook.jpg" alt="lehman img"/>
           <h1>{this.props.name} </h1>
            <p>{this.props.campName}</p> 
        
        </div>
        
      </div>

    
);
}
};
  


export default StudentCard;
