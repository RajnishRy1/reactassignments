import React, {Component} from 'react';
import axios from 'axios';
import Posts from '../Posts/Posts'
import './Form.css';
class Form extends Component{
    state={
        username:'',
        password:'',
        logged:false
    }

    usernameChangeHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    passwordChangeHandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    submitHandler=event=>{
        const data={
            email:this.state.username,
            password:this.state.password
        }
        axios.post('https://murmuring-river-22733.herokuapp.com/api/auth',data)
            .then(response=>{
                document.getElementById('u1').innerHTML=null;
                this.setState({logged:true});
                localStorage.setItem('x-auth-token',response.data);
            })
            .catch(error=>{alert(error.response.data);});
        event.preventDefault();
    }
    render(){
        if(this.state.logged)
        {
            return(
                <div>
                    <Posts/>
                </div>
            )
        }
        return(
            <form onSubmit={this.submitHandler} className="input">
            <div>
                <label>Email:</label><br/>
                <input type='text' value={this.state.username} onChange={this.usernameChangeHandler}  className="input"></input>
            </div>
            <div >
                <label>Password:</label><br/>
                <input type='password' value={this.state.password} onChange={this.passwordChangeHandler}  className="input"></input>
            </div>
            <button type="submit" className='button3'>Login</button>
            <p id='u1'></p>
            </form>
        )
    }
}

export default Form;