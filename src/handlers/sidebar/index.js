import sidebarList from './sidebarList';
import sidebarProfile from './sidebarProfile';

export {sidebarList, sidebarProfile};

export default () => {
  let el = document.createElement('div')
  el.className = 'spokeo-sidebar';
  el.innerHTML = '<div class="spokeo-sidebar-content"></div><div style="display: none;" class="profile-back">back &#8594;</div>'
  return el;
}