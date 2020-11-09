import React, {Component} from 'react';
import axios from 'axios';
import FPost from '../Form/Form';
import './ProductForm.css'
class ProductForm extends Component{
    state={
        company:'',
        modl:'',
        screen_size:'',
        price:'',
        camera:'',
        ram:'',
        discount:'',
        img:''  
    }

    companyChangeHandler=(event)=>{
        this.setState({
            company:event.target.value
        })
    }
    modlChangeHandler=(event)=>{
        this.setState({
            modl:event.target.value
        })
    }
    screenChangeHandler=(event)=>{
        this.setState({
            screen_size:event.target.value
        })
    }
    priceChangeHandler=(event)=>{
        this.setState({
            price:event.target.value
        })
    }
    cameraChangeHandler=(event)=>{
        this.setState({
            camera:event.target.value
        })
    }
    ramChangeHandler=(event)=>{
        this.setState({
            ram:event.target.value
        })
    }
    discountChangeHandler=(event)=>{
        this.setState({
            discount:event.target.value
        })
    }
    imgChangeHandler=(event)=>{
        this.setState({
            img:event.target.value
        })
    }

    submitHandler=(event)=>{
        const data={
            company:this.state.company,
            modl:this.state.modl,
            screen_size:this.state.screen_size,
            price:this.state.price,
            camera:this.state.camera,
            ram:this.state.ram,
            discount:this.state.discount,
            img:this.state.img
        }
        const token=localStorage.getItem('x-auth-token');
        axios.post('https://murmuring-river-22733.herokuapp.com/api/models',data,{headers:{'x-auth-token':token}})
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{alert(error.response.data);});
        event.preventDefault();
    }
    render(){
        if(!localStorage.getItem('x-auth-token'))
        {
            alert('Please Login First!!');
            return(
                <div>
                    <FPost/>
                </div>
            )
        }
        return(
            <div className="form">
<form onSubmit={this.submitHandler} className="pinput" >
            <div >
                <label>Company:</label><br/>
                <input type='text' className="pinput" value={this.state.company} onChange={this.companyChangeHandler}></input>
            </div>
            <div >
                <label>Model:</label><br/>
                <input type='text' className="pinput" value={this.state.modl} onChange={this.modlChangeHandler}></input>
            </div>
            <div >
                <label>Screen Size:</label><br/>
                <input type='text' className="pinput" value={this.state.screen_size} onChange={this.screenChangeHandler}></input>
            </div>
            <div >
                <label>Price:</label><br/>
                <input type='text' className="pinput" value={this.state.price} onChange={this.priceChangeHandler}></input>
            </div>
            <div >
                <label>Camera:</label><br/>
                <input type='text' className="pinput" value={this.state.camera} onChange={this.cameraChangeHandler}></input>
            </div>
            <div >
                <label>Ram:</label><br/>
                <input type='text' className="pinput" value={this.state.ram} onChange={this.ramChangeHandler}></input>
            </div>
            <div >
                <label>Discount:</label><br/>
                <input type='text' className="pinput" value={this.state.discount} onChange={this.discountChangeHandler}></input>
            </div>
            
            <div >
                <label>Image Link:</label><br/>
                <input type='url' className="pinput" value={this.state.img} onChange={this.imgChangeHandler}></input>
            </div>
            <button type="submit"className="button3">Submit</button>
            </form>
            </div>
            
        )
    }
}

export default ProductForm;