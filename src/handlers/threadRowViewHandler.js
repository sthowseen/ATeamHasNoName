import { getAssetUrl } from '../utils'

export default threadRowView => {
  let contacts = threadRowView.getContacts();
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    threadRowView.addImage({
      imageUrl: getAssetUrl('assets/monkey.png'),
      tooltip: 'email',
      imageClass: 'rounded_stripe'
    });
  }
};
