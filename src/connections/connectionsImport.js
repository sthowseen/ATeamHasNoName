import { importContacts } from '../api';

export function syncContacts(userEmail, contacts) {
  let currentUser = contacts.filter(c => c.email === userEmail)[0]
  let owner = createOwner(currentUser);
  let data = contacts.map(contact => createConnectionsContact(contact));
  importContacts(data, owner);
}

function createOwner(contact) {
  return {
    first_name: contact.name,
    // last_name: 'Hedgehogs',
    external_id: '85f9364d75f81e6fb75178384e9f0436d24b03b339375ae435907fc4839e2867',
    //phone: '',
    email: [{ address: contact.email }],
    // groups: [],
    // companies: [],
    // photos: [],
    locations: [contact.location],
    owner: true
  };
}

function createConnectionsContact(contact) {
  return {
    first_name: contact.name,
    // last_name: contact.name,
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
    // companies: [],
    // photos: [],
    locations: [contact.location]
  };
}