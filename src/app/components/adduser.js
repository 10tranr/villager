import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { AppBar, Dialog, Drawer, MenuItem, RaisedButton, IconButton, TextField } from 'material-ui';
import { SvgIcon } from 'material-ui';
import { Menu } from 'material-ui-icons';
import Icons from 'material-ui-icons';

// --------Import other components here---------
require('../../style/style.css');
// ---------------------------------------------

export default class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDrawer: false,
            openAddUserWindow: false,

            user: {
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: ""
            },

            firstNameValue: "",
            lastNameValue: "",
            usernameValue: "",
            emailValue: "",
            passwordValue: ""
        }
    }

    toggleAddUser() {
        this.setState({ openAddUserWindow: !this.state.openAddUserWindow })
    }

    handleFirstNameValueChange(value) {
        this.setState({firstNameValue: value});
    }

    handleLastNameValueChange(value) {
        this.setState({lastNameValue: value});
    }

    handleUsernameValueChange(value) {
        this.setState({usernameValue: value});
    }

    handleEmailValueChange(value) {
        this.setState({emailValue: value});
    }

    handlePasswordValueChange(value) {
        this.setState({passwordValue: value});
    }

    cleanInputs() {
        this.handleFirstNameValueChange("");
        this.handleLastNameValueChange("");
        this.handleUsernameValueChange("");
        this.handleEmailValueChange("");
        this.handlePasswordValueChange("");
    }

    handleCancel() {
        this.cleanInputs();
        this.toggleAddUser();
    }

    handleSubmit() {
        let user = this.state.user;
        user.firstName = this.state.firstNameValue;
        user.lastName = this.state.lastNameValue;
        user.username = this.state.usernameValue;
        user.email = this.state.emailValue;
        user.password = this.state.passwordValue;
        this.props.getUserData(user);
        this.cleanInputs();
        this.toggleAddUser();
    }
    
    render() {
        // Insert JSX to be rendered to localhost here
        return (
            <div>
                <RaisedButton
                    backgroundColor="#2196F3"
                    labelColor="#FFFFFF"
                    label="Add User"
                    onClick={this.toggleAddUser.bind(this)} />
                <Dialog
                title="Add User"
                actions={
                    [
                    <RaisedButton
                        backgroundColor="#2196F3"
                        labelColor="#FFFFFF"
                        label="Cancel"
                        onClick={this.handleCancel.bind(this)}/>,
                    <RaisedButton
                        backgroundColor="#2196F3"
                        labelColor="#FFFFFF"
                        label="Submit"
                        onClick={this.handleSubmit.bind(this)}/>
                    ]
                }
                modal={false}
                open={this.state.openAddUserWindow}
                onRequestClose={(open) => this.setState({open})}
                contentStyle={{width: "30%"}}
                autoScrollBodyContent={true}
                >
                <TextField
                    floatingLabelText="First Name"
                    hintText="First Name Field"
                    value={this.state.firstNameValue}
                    onChange={(e) => {this.handleFirstNameValueChange(e.target.value)}}/>
                <br/>
                <TextField
                    floatingLabelText="Last Name"
                    hintText="Last Name Field"
                    value={this.state.lastNameValue}
                    onChange={(e) => {this.handleLastNameValueChange(e.target.value)}}/>
                <br/>
                <TextField
                    floatingLabelText="Username"
                    hintText="Username Field"
                    value={this.state.usernameValue}
                    onChange={(e) => {this.handleUsernameValueChange(e.target.value)}}/>
                <br/>
                <TextField
                    floatingLabelText="Email"
                    hintText="Email Field"
                    value={this.state.emailValue}
                    onChange={(e) => {this.handleEmailValueChange(e.target.value)}}/>
                <br/>

                <TextField
                    floatingLabelText="Password"
                    hintText="Password Field"
                    type="password"
                    value={this.state.passwordValue}
                    onChange={(e) => {this.handlePasswordValueChange(e.target.value)}}/>

                </Dialog>
            </div>
        );
    }
}
