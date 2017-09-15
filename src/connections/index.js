import connectionsRouteViewHandler from "./connectionsRouteViewHandler";

export {
  connectionsRouteViewHandler
};


export function syncContacts(contacts) {
  console.log('syncContacts', contacts);
  let data = contacts.map(contact => createConnectionsContact(contact))
  console.log('data', data)
}

function createConnectionsContact(contact) {
  console.log(contact)
  return {
    first_name: contact.name,
    // last_name: null,
    // phone: [{ number: '601-928-8475', type: 'other' }],
    email: [{ address: contact.email, type: 'other' }],
    // address: [
    //   {
    //     street: '280 Flint Creek Rd',
    //     region: 'MS',
    //     city: 'Wiggins',
    //     postal_code: '39577',
    //     formatted: '280 Flint Creek Rd, Wiggins, MS 39577',
    //     type: 'other'
    //   }
    // ],
    groups: ['Contacts'],
    // companies: nil,
    // photos: nil,
    locations: [contact.location]
  };
}

export function createConnectionsNavItem() {
  return {
    name: 'Spokeo Connections',
    iconUrl: '',
    routeID: 'spokeo',
    onClick: showConnections
  };
}

function showConnections(x) {
  // console.log('clicked showConnections');
}