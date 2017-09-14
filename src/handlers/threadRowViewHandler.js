export default threadRowView => {
  let contacts = threadRowView.getContacts();
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    threadRowView.addImage({
      imageUrl: chrome.runtime.getURL('monkey.png'),
      tooltip: 'email',
      imageClass: 'rounded_stripe'
    });
  }
};
