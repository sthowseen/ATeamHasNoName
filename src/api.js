import axios from 'axios';
import qs from 'qs';

const HOSTNAME = 'https://feature12.qa.spokeo.com';
const USER_ID = 99397903; // calvin+hackathon1@spokeo.com

export function fetchProfiles(userEmails, callback) {
  $.get(`${HOSTNAME}/hackathon/search?e=${userEmails.join(',')}`, callback);
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
      console.log(response.data)
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}
