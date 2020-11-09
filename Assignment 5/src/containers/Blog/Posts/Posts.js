import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css'
import {Link} from 'react-router-dom';

class Posts extends Component{
    state={
        posts:[]
    } 

    selectHandler=(id)=>{
        this.setState({selectedPostId:id});
    }
     
    componentDidMount(){
            
            axios.get('https://murmuring-river-22733.herokuapp.com/api/models')
                .then(response=>{
                    const posts=response.data.slice(0,5);
                    const updatedPosts= posts.map(post=>{
                        return {...post,author:'Rajnish'}
                    })
                    this.setState({posts:updatedPosts});
                    console.log(response);})
                .catch(error=>{
                    console.log(error);
                    //this.setState({error:true})});
                    });
                }
    
    render(){
        let posts=<p style={{textAlign:'center'}}>Something went wrong!</p>
        if(!this.state.error)
        {
            posts=this.state.posts.map(post=>{
                return <Link to={'/'+post._id} key={post._id} >
                    <Post 
                    Id={post._id}
                    Company={post.company} 
                    Model={post.modl}
                    Camera={post.camera}
                    Img={post.img}
                    clicked={()=>this.selectHandler(post._id)}
                />
                </Link> 
            });
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;