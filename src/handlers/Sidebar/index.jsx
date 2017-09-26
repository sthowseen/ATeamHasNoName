import React from 'react';
import SidebarList from './SidebarList';
import { fetchProfiles } from '../../api';
import { getAssetUrl, createContact } from '../../utils';

export class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contacts: []
    }
  }

  users() {
    let users = [];

    this.props.views.forEach((view) => {
      const sender = view.getSender();
      const recipients = view.getRecipients();
      
      users.push(sender);
      users = users.concat(recipients)
    });

    return users;
  }

  userEmails() {
    return this.users().map(user => user.emailAddress);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    fetchProfiles(this.userEmails()).then(profiles => {
      
      let contacts = profiles.map(createContact);

      contacts
        .filter(
          contact => !contact.email && props.userEmail.indexOf(contact.name) === 0
        )
        .forEach(contact => {
          contact.email = props.userEmail;
        });
      this.setState({
        contacts: contacts.filter(contact => !!contact.email)
      })
      syncContacts(props.userEmail, this.state.contacts);
    });
  }
  
  render() {
    console.log(this.state.contacts);
    return(
      <div className="spokeo-sidebar" id="spk-react-sidebar">
        <div className="spokeo-sidebar-content">
          <SidebarList contacts={this.state.contacts}/>
        </div>
        <div style={{'display' : 'none'}} className="profile-back">
          back &#8594;
        </div>
      </div>
    );
  }
}

export default Sidebar;