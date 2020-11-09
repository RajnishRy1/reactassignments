import React, { Component } from 'react';
//import axios from 'axios';
import {NavLink, Route,Switch} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import ProductForm from './Form/ProductForm';
import FPost from './Form/Form';


class Blog extends Component {
    logout=()=>
    {
        localStorage.removeItem('x-auth-token');
    }
    render () {
        if(!localStorage.getItem('x-auth-token'))
        {
            return (
                <div className="Blog"> 
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/add">Add Product</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </nav>
                    </header> 
                    <Switch>
                        <Route path="/" exact component={Posts}/>
                        <Route path="/add" component={ProductForm}></Route>
                        <Route path="/login"exact component={FPost}></Route>
                        <Route path="/:id" exact component={FullPost}></Route>
                    </Switch>
                </div>
            );
        }
        return (
            <div className="Blog"> 
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>

                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post
                            </NavLink></li>
                            <li><NavLink to="/add">Add Product</NavLink></li>
                            <li onClick={this.logout}><NavLink to="/login">Logout</NavLink></li>
                            
                        </ul>
                    </nav>
                </header> 
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post"  component={NewPost}/>
                    <Route path="/add" component={ProductForm}></Route>
                    <Route path="/logout"exact component={null}></Route>
                    <Route path="/:id" exact component={FullPost}></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;