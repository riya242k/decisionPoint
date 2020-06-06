// List of users: https://jsonplaceholder.typicode.com/users
//  Related posts made by users: https://jsonplaceholder.typicode.com/posts?userId=1

import React,{Component} from 'react';
class Display extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
        results:[],
        search: "",
        selectedUser:null
      };
    }

      async fetchFirst(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersList = await response.json();
        console.log(usersList);
        this.setState({results: usersList});
        
    }

    componentDidMount(){
        this.fetchFirst();
    }
    
      renderUser(user) {
        return (
            <div style={{ marginTop: "20px" }}>
                <table className="w-50 mx-auto mt-5">
                <tr className="rowss" onClick={() => this.props.setuid(user.id)}>
                       <td >{user.id}</td>
                       <td>{user.name}</td>
                </tr>
             
              </table>
            </div>
          );

}

onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredUsers = this.state.results.filter(user => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
          <div className="w-50 mx-auto mt-5">
              <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
              <i className="fa fa-search ml-4" />
             <input className="form-control form-control-sm ml-3 w-75" label="Search user" onChange={this.onchange} placeholder="search for users"/>
            
             </form>
                {filteredUsers.map(user => {
                    return this.renderUser(user);
                })}
                </div>
            
        
    );
  }
}

export default Display;

