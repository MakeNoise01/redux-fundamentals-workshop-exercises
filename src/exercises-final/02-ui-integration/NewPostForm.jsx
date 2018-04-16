import React, {Component} from "react";

import store from "./store";
import {addNewPost} from "./actions";


export default class NewPostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : "",
            selectedUser : null,
            users : store.getState().users,
        };
    }

    onSelectedUserChanged = (e) => {
        const {value} = e.target;
        this.setState({selectedUser : value || null})
    }

    onPostTitleChanged = (e) => {
        const {value} = e.target;
        this.setState({title : value});
    }

    onAddNewPostClicked = () => {
        const {title, selectedUser} = this.state;

        if(selectedUser !== null && title !== "") {
            store.dispatch(addNewPost(selectedUser, title));
            this.setState({title : ""});
        }
    }

    render() {
        const {title, selectedUser, users} = this.state;


        const usersOptions = users.map(user => <option key={user.username} value={user.username}>{user.name}</option>);
        // Add an empty selection option
        usersOptions.unshift(<option key="empty" value="" />);

        return (
            <div>
                <h4>New Post</h4>
                <input type="text" onChange={this.onPostTitleChanged} value={title} />
                <div>Author: <select value={selectedUser || ''} onChange={this.onSelectedUserChanged}>{usersOptions}</select></div>
                <div><button onClick={this.onAddNewPostClicked}>Add New Post</button></div>
            </div>
        )
    }
}