import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + this.props.uid);
        const data = await response.json();
        this.setState({ data: data });
    }

    display() {

        const items = this.state.data.map(user => {
            return(
                
                <table className="w-50 mx-auto mt-5">
                       
                       <tr>
                           <tr className="text-center"><b>user id:{user.userId}</b></tr>
                           <tr> <b>title </b></tr>
                       <tr>{user.title}</tr>
                       <tr><b>body</b></tr>
                       <tr>{user.body}</tr>
                       </tr>
             
              </table>
            );
        });

        return items;
    }
    
    render(){
        return(
            this.state.data === null ?
                <div></div>
            :
                <div>
                    {this.display()}
                </div>
        );
    }
}

export default Post;