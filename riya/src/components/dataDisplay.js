import React, { Component } from 'react';
import Table from './table';
import Post from './post';

class Display extends Component {

    constructor(props){
        super(props);

        this.state = {
            uid: null
        }

        this.setuid = this.setuid.bind(this);
    }

    setuid(id) {
        this.setState({uid: id});
    }

    render(){
        return(
            this.state.uid === null ?
                <Table setuid={this.setuid} />
            :
                <Post uid = { this.state.uid } />
        );
    }
}

export default Display;