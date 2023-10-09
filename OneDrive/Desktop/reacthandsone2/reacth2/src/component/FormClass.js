import React, { Component } from "react";
import "./form.css"


class FormClass extends Component{

state={
    Name : "",
    Department : "",
    Rating : "",
    EmpData : []
}
chageHandle=(e)=>{
    this.setState({[e.target.name] : e.target.value})
    console.log(e.target.name);
    console.log(e.target.value);
}
clickHandle=(e)=>{
    e.preventDefault();
    let newObj={
        Name : this.state.Name,
        Department : this.state.Department,
        Rating : this.state.Rating
    }
    this.state.EmpData.push(newObj);
    this.setState({EmpData : this.state.EmpData})
    console.log(this.state.EmpData);
}
    render(){

        return(
<div className="parent">
             <h1 className="heading">EMPLOYYEE FEEDBACK FORM</h1>
            <form>
               <table >
                <tbody>

            
                <tr>
                    <td>  <label htmlFor="name" >Name:</label></td>
                    <td>
                        <input  name="Name" id="name" placeholder="Enter Name"  value={this.state.Name} onChange={this.chageHandle}          />
                    </td>
                </tr>
                <tr>
                    <td>  <label htmlFor="department" >Department:</label></td>
                    <td>
                        <input  name="Department" id="department" placeholder="Enter Department "  value={this.state.Department} onChange={this.chageHandle}          />
                    </td>
                </tr>
                <tr>
                    <td>  <label htmlFor="rating" >Name:</label></td>
                    <td>
                        <input  name="Rating" id="rating" placeholder="Enter Rating"  value={this.state.Rating} onChange={this.chageHandle}          />
                    </td>
                </tr>
                <tr>
        
                    <th colSpan={2}>
                       <button className="buttonSubmit" onClick={this.clickHandle}>Submit</button>
                    </th>
                </tr>
                </tbody>
               </table>
              
            </form>
            {
                this.state.EmpData.map((item,index)=>{
                    return(
                        <>
                        <span>Name:{item.name} || Department : {item.department} || Rating : {item.rating}</span>
                        </>
                    )
                })
            }
        </div>
        )
        
    }
}

export default FormClass;