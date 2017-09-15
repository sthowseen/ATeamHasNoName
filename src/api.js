import axios from 'axios';
import qs from 'qs';

const HOSTNAME = 'https://feature12.qa.spokeo.com';
const USER_ID = 99397903; // calvin+hackathon1@spokeo.com/spokeo123
// const HOSTNAME = 'https://jmercado.spokeo.com';
// const USER_ID = 170;

export function fetchProfiles(userEmails) {
  return axios
    .get(`${HOSTNAME}/hackathon/search?e=${userEmails.join(',')}`)
    .then(response => response.data)
    .catch(console.error);
}

export function importContacts(contacts, owner, user_id = USER_ID) {
  let data = {
    user_id,
    contacts,
    owner
  };

  return axios
    .post(
      `${HOSTNAME}/hackathon/import`,
      qs.stringify(data, { arrayFormat: 'brackets' })
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(console.error);
}
