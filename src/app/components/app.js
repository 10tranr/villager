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
import AddUser from './adduser.js';
// ---------------------------------------------

const muiTheme = getMuiTheme({
    appBar: {
        color: "#2196F3",
        height: 50,
    }
})

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDrawer: false,
            openAddUserWindow: false,

            user: {
            }
        }
    }

    toggleDrawer() {
        this.setState({ openDrawer: !this.state.openDrawer });
    }

    getUserData(user) {
        this.setState({user});
    }
    
    render() {
        // Insert JSX to be rendered to localhost here
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                    <RaisedButton
                        backgroundColor="#2196F3"
                        icon={<Menu color="white"/>}
                        onClick={this.toggleDrawer.bind(this)}
                    />
                    <Drawer
                        docked={false}
                        open={this.state.openDrawer}
                        onRequestChange={(open) => this.setState({open})}>
                        <AppBar color="#2196F3" title="Villagers"/>
                        <MenuItem>User</MenuItem>
                    </Drawer>
                    
                    <AddUser
                        getUserData={this.getUserData.bind(this)}/>
                    <RaisedButton
                        backgroundColor="#2196F3"
                        label="User"
                        onClick={console.log(this.state.user)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
