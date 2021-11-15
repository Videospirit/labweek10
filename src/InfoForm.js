import React, { Component } from 'react'


export default class InfoForm extends Component {
    provinces = ["Choose...","Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan"]
    
    constructor(props) {
        super(props)
        
        this.state = {
             email:"",
             name:'',
             adr1:'',
             adr2:'',
             city:'',
             prov:'',
             pc:'',
             emailT:"",
             nameT:'',
             adr1T:'',
             adr2T:'',
             cityT:'',
             provT:'',
             pcT:''
        }
        this.submitData = this.submitData.bind(this)
        this.readData = this.readData.bind(this)
    }

    readData = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitData(e){
        e.preventDefault()
        this.setState({
            pc:this.state.pcT,
            email:this.state.emailT,
            name:this.state.nameT,
            adr1:this.state.adr1T,
            adr2:this.state.adr2T,
            city:this.state.cityT,
            prov:this.state.provT
        })
    }
    
    label="Agree Terms & Condition?"

    render() {
        return (
            <>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.submitData}>
                <section>
                <div style={{float:"left",marginRight:"10px"}}>
                    <label for="emailT">Email</label><br/>
                    <input onChange={this.readData} name="emailT" placeholder="Enter email" type="text"/>
                </div>
                <div style={{float:"left"}}>
                    <label for="nameT">Name</label><br/>
                    <input onChange={this.readData} name="nameT" placeholder="Full Name" type="text"/>
                </div>
                <br style={{clear:"both"}}/>
                </section>
                <label>Address</label><br/>
                <input onChange={this.readData} name="adr1T" placeholder="1234 Main St" type="text"/><br/>
                <label>Address 2</label><br/>
                <input onChange={this.readData} name="adr2T" placeholder="Apartment, studio, or floor" type="text"/><br/>
                <section>
                <div style={{float:"left",marginRight:"10px"}}>
                    <label>City</label><br/>
                    <input onChange={this.readData} name="cityT" type="text"/>
                </div>
                
                <div style={{float:"left",marginRight:"10px"}}>
                    <label>Province</label><br/>
                    <select onChange={this.readData} name='provT'>
                    {
                        this.provinces.map(p =>{
                            return(<option key={p}>{p}</option>)
                        })
                    }
                    </select>
                </div>

                <div style={{float:"left"}}>
                <label>Postal Code</label><br/>
                <input onChange={this.readData} name="pcT" type="text"/><br/>
                </div>
                </section>
                <br style={{clear:"both"}}/>
               
                
                <label><input type="checkbox" value={this.label}/>{this.label}</label><br/>
               <input type="submit" value="Submit"/>
               </form>
               <table>
                   <tr>
                       <td>Email:</td>
                       <td>{this.state.email}</td>
                   </tr>
                   <tr>
                       <td>Full Name:</td>
                       <td>{this.state.name}</td>
                   </tr>
                   <tr>
                       <td>Address:</td>
                       <td>{this.state.adr1} {this.state.adr2}</td>
                   </tr>
                   <tr>
                       <td>City:</td>
                       <td>{this.state.city}</td>
                   </tr>
                   <tr>
                       <td>Province:</td>
                       <td>{this.state.prov}</td>
                   </tr>
                   <tr>
                       <td>Postal Code:</td>
                       <td>{this.state.pc}</td>
                   </tr>
               </table>
                

            </>
        )
    }
}
