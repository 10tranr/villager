import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

// --------Import other components here---------
require('../../style/style.css');
import { MapContainer } from './map-container';
import { Profile_Button } from './button';

// ---------------------------------------------

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state= {
            visible: false
        }
    }
    
    toggleVisibility() {
        let visible = this.state.visible;
        this.setState({ visible: !visible })
    }
    
    
    render() {
        const { visible } = this.state;
        const location = {
            lat: 40.7500,
            long: -73.9800
        }
        return (
            <div>
                <Sidebar.Pushable as={Segment} className={'body'}>
                <Sidebar as={Menu} animation='push' color={'blue'} width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='user'>
                        <Profile_Button/>
                        <div>
                            Randy Tran
                        </div>
                    </Menu.Item>
                    <Menu.Item name='settings'>
                        <Button icon='settings' content='Settings'/>
                    </Menu.Item>
                    <Menu.Item name='list'>
                    <Button icon='list' content='Lists'/>
                    </Menu.Item>
                    <Menu.Item name='star'>
                    <Button icon='star' content='Interests'/>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher >
                    <Segment basic>  
                    <Button onClick={this.toggleVisibility.bind(this)} className={'button-toggle-menu'} icon={'content'} />
                    <input />
                    <h1>Put Map Here</h1>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqHoOzMrLxbpnETOzRdfAaqD3yqBOn170&callback=myMap"></script>
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
