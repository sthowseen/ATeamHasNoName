import { getAssetUrl } from '../utils'

export default threadView => {
  const el = document.createElement('div');
  el.innerHTML = 'A Team with no name';

  threadView.addSidebarContentPanel({
    title: 'Sidebar Example',
    iconUrl: getAssetUrl('monkey.png'),
    el
  });
};
