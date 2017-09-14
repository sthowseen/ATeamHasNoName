function syncContacts(...args) {
  console.log(...args)
  alert('sync contacts')
}




export function createConnectionsNavItem() {
  return {
    name: 'Spokeo Connections',
    iconUrl: '',
    onClick: syncContacts
  };
}
