
import React from 'react'

    class Contacts extends React.Component{ 
        state={
            name:"",
            email:""
        };
        add=(e)=>{e.preventDefault();
        if (this.state.name==="" || this.state.email===""){
            alert("all fields are mandatory");
            return;
        }
    this.props.addContactHandler(this.state);
    this.setState({name:'', email:''});
    }
        render(){
    
    
            return(<>
                <div className="container">
                    <h1>CONTACT MANAGER</h1>
                    <form onSubmit={this.add}>
                        <label>Name</label>
                        <input className="name" placeholder="enter name" 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}></input>
                     
                        
                        <label>Email</label>
                        <input className="email" placeholder="enter email" 
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})}></input>
                        <button type="submit" className='submitbutton'>ADD</button>
                    </form> 
                </div>
                
                </>
        
            )
        }
    }
    export default Contacts;
   
    
