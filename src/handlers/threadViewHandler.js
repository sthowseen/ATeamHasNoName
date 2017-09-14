import { getAssetUrl } from '../utils'

export default threadView => {
  let emailCount = 4;
  let el = document.createElement('div');
  el.classList.add('spk-sidebar');

  let counter = document.createElement('div')
  counter.classList.add('spk-counter');
  counter.innerHTML = `${emailCount}`;

  el.append(counter);

  // const listTitle = document.createElement('div').classList.add('listname');

  threadView.addSidebarContentPanel({
    title: `Spokeo Sidebar`,
    iconUrl: '',
    id: 'spk-sidebar',
    el
  });
};
